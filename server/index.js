//Nod=s dépendances
const express = require("express")
const app = express()
const mysql = require('mysql2') 
const cors = require('cors')

//lets run the server
app.use(express.json())
app.use(cors())

app.listen(3002, ()=>{
    console.log('Le server torne sur le port 3002')
})

app.use(cors({
  origin: 'http://localhost:5173' // Remplacez ceci par l'URL de votre application front-end
}));

//Connectons notre base de donnée
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'ecommerce',
})

//route versle serveur
//api d'inscription
app.post('/register', (req, res) => {
    const { name, phone, password } = req.body;

    // Insérer un nouvel utilisateur
    const insertUserQuery = `INSERT INTO user (name, phone, password) VALUES (?, ?, ?)`;
    db.query(insertUserQuery, [name, phone, password], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion de l\'utilisateur :', err);
            res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'utilisateur' });
            return;
        }

        // Récupérer l'ID de l'utilisateur inséré
        const lastUserId = result.insertId;

        // Insérer un acheteur avec l'ID de l'utilisateur inséré
        const insertBuyerQuery = `INSERT INTO buyer (id_user) VALUES (?)`;
        db.query(insertBuyerQuery, [lastUserId], (err) => {
            if (err) {
                console.error('Erreur lors de l\'insertion de l\'acheteur :', err);
                res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'acheteur' });
                return;
            }
            res.status(201).json({ message: 'Utilisateur et acheteur insérés avec succès' });
        });
    });
});


//api de connection

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const sql = 'SELECT * FROM user WHERE name = ? AND password = ?';
    db.query(sql, [name, password], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length >= 1 && result[0].password === password) {
                res.send({ message: 'Connexion réussie', user: result[0] });
            } else {
                res.send({ message: 'Échec de la connexion' });
            }
        }
    });
});

//renvoyer les produits

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM product';
    
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        console.log (results)
      } else {
        res.json(results);
      }
    });
  });
  


  //selection des vendeurs du produit selectionné
  app.get('/vendors', (req, res) => {
    const sql = 'SELECT * FROM product, vendor, product_stock, user WHERE product.id_product = product_stock.id_product AND vendor.id_vendor = product_stock.id_vendor AND user.id_user = vendor.id_user;';
    
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        console.log (results)
      } else {
        res.json(results);
      }
    });
  });


//get les infos relatifs à un produit

app.get('/product/:productId/sellers', (req, res) => {
  const productId = parseInt(req.params.productId);

  const query = `
  SELECT vendor.id_vendor, product_stock.quantity,product_stock.id_stock, product.product_image AS image, vendor.statut, vendor.description AS vendor_description, vendor.id_vendor, user.name, user.phone, user.id_user,product_stock.description AS stock_description, user.name AS vendorname, user.phone, vendor.vendor_image FROM product_stock, vendor, product, user WHERE product_stock.id_vendor = vendor.id_vendor AND product.id_product = product_stock.id_product AND vendor.id_user = user.id_user AND product.id_product = ?
  `;


  db.query(query, [productId], (err, results) => {
    if (err) {
      console.error('Error fetching product sellers and stock:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const vendors = results.map(row => ({
        id: row.id_vendor,
        id_stock : row.id_stock,
        status: row.statut,
        vendorDescription: row.vendor_description,
        stockQuantity: row.quantity,
        stockDescription: row.stock_description,
        nom : row.vendorname,
        phone : row.phone,
        image: row.image,
        vendor_image : row.vendor_image,
        id_user : row.id_user
      }));

      res.json(vendors);
    }
  });
});


//creation de panier
app.post("/panier", (req, res) => {
  const { userId } = req.body;

  const cartQuery = "INSERT INTO shopping_cart (id_buyer) VALUES (?) ON DUPLICATE KEY UPDATE id_cart=LAST_INSERT_ID (id_cart)";

  db.query(cartQuery, [userId], (err, cartResult) => {
    if (err) {
      console.error("Erreur lors de l'insertion de l'utilisateur :", err);
      res.status(500).json({ message: "Erreur lors de l'insertion de l'utilisateur" });
    } else {
      // Obtenez l'ID du panier nouvellement inséré ou mis à jour
      const cartId = cartResult.insertId || (cartResult.affectedRows > 0 ? userId : null);
      if (cartId !== null) {
        res.status(201).json({ message: "Utilisateur inséré dans le panier avec succès", cartId });
      } else {
        res.status(500).json({ message: "Erreur lors de la récupération de l'ID du panier" });
      }
    }
  });
});

//api de post dans le shopping cart

app.post("/add-to-cart/:vendorId", (req, res) => {
  const { productId, quantity, totalShop, cartId } = req.body;
  const { vendorId } = req.params;

  // Utilisez l'ID du panier récupéré ou nouvellement créé
  const itemQuery = `
    INSERT INTO shopping_cart_item (id_cart, id_vendor, id_product, quantity, total_shop) VALUES (?, ?, ?, ?, ?)`;

  db.query(itemQuery, [cartId, vendorId, productId, quantity, totalShop], (err) => {
    if (err) {
      console.error('Erreur lors de l\'insertion de l\'acheteur :', err);
      res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'acheteur' });
    }
    res.status(201).json({ message: 'Élément ajouté au panier avec succès' });
  });
});


//api de reception des elements du panier

app.get('/shopping-cart', (req, res) => {
  const sql = `
  SELECT shopping_cart_item.id_item, shopping_cart_item.quantity, shopping_cart_item.total_shop, vendor.statut, user.name AS vendor_name, product.name AS product_name, product.product_image FROM shopping_cart_item, vendor,product, user WHERE shopping_cart_item.id_vendor = vendor.id_vendor AND shopping_cart_item.id_product = product.id_product AND vendor.id_user = user.id_user AND shopping_cart_item.id_cart = (SELECT id_cart FROM shopping_cart ORDER BY id_cart DESC LIMIT 1);

  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      res.status(500).json({ error: 'Erreur serveur' });
      return;
    }
    res.json(result);
  });
});

app.get('/total', (req, res) => {
  const sql = `
  
  SELECT SUM(total_shop) AS total_vente, SUM(quantity) AS total_poids, id_item FROM shopping_cart_item WHERE shopping_cart_item.id_cart = (SELECT id_cart FROM shopping_cart ORDER BY id_cart DESC LIMIT 1);

  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      res.status(500).json({ error: 'Erreur serveur' });
      return;
    }
    res.json(result);
  });
});


app.post('/commande', (req, res) => {
  const { id_user, id_product, shopping_adress, total_order,total_price, description } = req.body;
  // Insérer une nouvelle commande avec id_status par défaut à 1
  const insertOrderQuery = `INSERT INTO shop_order (id_user, id_status, id_product, id_paiement, shopping_adress, order_date, total_order, total_price, description, time) VALUES (?, 1,?, NULL, ?, NOW(), ?, ?,?, CURRENT_TIME());`;

  db.query(insertOrderQuery, [id_user, id_product,shopping_adress, total_order,total_price, description], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion de la commande :', err);
      res.status(500).json({ message: 'Erreur lors de l\'insertion de la commande' });
      return;
    }
    // La commande a été insérée avec succès
    res.status(200).json({ message: 'Commande insérée avec succès' });
  });
});


app.get('/historique', (req, res) => {
  const selectQuery = `SELECT * 
  FROM shop_order so
  JOIN user u ON so.id_user = u.id_user
  JOIN status s ON so.id_status = s.id_status
  LEFT JOIN paiement_method pm ON so.id_paiement = pm.id_paiement
  JOIN product p ON so.id_product = p.id_product
  WHERE so.id_user = 19 
    AND (so.id_paiement IS NULL OR so.id_paiement = pm.id_paiement)
  ORDER BY id_order DESC;
  
  `;

  db.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des données:', err);
      res.status(500).json({ message: 'Erreur lors de la récupération des données' });
    } else {
      res.status(200).json(result);
    }
  });
})

app.get('/enCoursValidation', (req, res) => {
  const selectQuery = `SELECT * 
  FROM shop_order so
  JOIN user u ON so.id_user = u.id_user
  JOIN status s ON so.id_status = s.id_status
  LEFT JOIN paiement_method pm ON so.id_paiement = pm.id_paiement
  JOIN product p ON so.id_product = p.id_product
  WHERE so.id_user = 19 
    AND (so.id_paiement IS NULL OR so.id_paiement = pm.id_paiement)
    AND s.id_status = 1
  ORDER BY id_order DESC;
  
  `;

  db.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des données:', err);
      res.status(500).json({ message: 'Erreur lors de la récupération des données' });
    } else {
      res.status(200).json(result);
    }
  });
})


app.get('/valide', (req, res) => {
  const selectQuery = `SELECT * 
  FROM shop_order so
  JOIN user u ON so.id_user = u.id_user
  JOIN status s ON so.id_status = s.id_status
  LEFT JOIN paiement_method pm ON so.id_paiement = pm.id_paiement
  JOIN product p ON so.id_product = p.id_product
  WHERE so.id_user = 19 
    AND (so.id_paiement IS NULL OR so.id_paiement = pm.id_paiement)
    AND s.id_status = 2
  ORDER BY id_order DESC;
  
  `;

  db.query(selectQuery, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des données:', err);
      res.status(500).json({ message: 'Erreur lors de la récupération des données' });
    } else {
      res.status(200).json(result);
    }
  });
})


app.get('/commandes/:shopId', (req, res) => {
  const shopId = parseInt(req.params.shopId);

  const query = `
  SELECT * FROM shop_order
    JOIN user ON shop_order.id_user = user.id_user
    JOIN status ON shop_order.id_status = status.id_status
    LEFT JOIN paiement_method ON paiement_method.id_paiement = shop_order.id_paiement
    WHERE shop_order.id_order = ? AND (shop_order.id_paiement IS NULL OR paiement_method.id_paiement IS NOT NULL)
    LIMIT 1;

  `;

  db.query(query, [shopId], (err, results) => {
    if (err) {
      console.error('Error fetching order details:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const orderDetails = results.map(row => ({
        id_order: row.id_order,
        id_status : row.id_status,
        order_number : row.order_number,
        order_date : row.order_date,
        time : row.time,
        total_order : row.total_order,
        total_price : row.total_price,
        
        // Add other fields you want to include in the response
      }));

      res.json(orderDetails);
    }
  });
});




//ADMIN


app.get("/nbre_vendeur", (req, res) => {
  const countQuery = `SELECT COUNT(*) AS nbre_vendeurs FROM vendor;
  SELECT COUNT(*) AS nbre_validées FROM shop_order WHERE shop_order.id_status = 2;
  SELECT COUNT(*) AS nbre_enattente FROM shop_order WHERE shop_order.id_status = 1;
  SELECT COUNT(*) AS nbre_livre FROM shop_order WHERE shop_order.id_status = 5
  `;

  db.query(countQuery, (err, result) => {
    if (err) {
      console.error("Erreur lors du comptage des éléments :", err);
      res.status(500).json({ message: "Erreur lors du comptage des éléments" });
    } else {
      const nbreVendeurs = result[0].nbre_vendeurs; // Utilisez nbre_vendeurs au lieu de total_items
      res.status(200).json({ nbreVendeurs });
    }
  });
});


app.get("/nbre_validées", (req, res) => {
  const countQuery = `
  SELECT COUNT(*) AS nbre_validées FROM shop_order WHERE shop_order.id_status = 2;
 
  `;

  db.query(countQuery, (err, result) => {
    if (err) {
      console.error("Erreur lors du comptage des éléments :", err);
      res.status(500).json({ message: "Erreur lors du comptage des éléments" });
    } else {
      const nbreVendeurs = result[0].nbre_vendeurs; // Utilisez nbre_vendeurs au lieu de total_items
      res.status(200).json({ nbreVendeurs });
    }
  });
});

app.get("/nbre_enattente", (req, res) => {
  const countQuery = `
  SELECT COUNT(*) AS nbre_enattente FROM shop_order WHERE shop_order.id_status = 1;
  `;

  db.query(countQuery, (err, result) => {
    if (err) {
      console.error("Erreur lors du comptage des éléments :", err);
      res.status(500).json({ message: "Erreur lors du comptage des éléments" });
    } else {
      const nbreEnattente = result[0].nbre_enattente; // Utilisez nbre_vendeurs au lieu de total_items
      res.status(200).json({ nbreEnattente });
    }
  });
});

app.get("/nbre_livré", (req, res) => {
  const countQuery = `
  SELECT COUNT(*) AS nbre_livre FROM shop_order WHERE shop_order.id_status = 5
  `;

  db.query(countQuery, (err, result) => {
    if (err) {
      console.error("Erreur lors du comptage des éléments :", err);
      res.status(500).json({ message: "Erreur lors du comptage des éléments" });
    } else {
      const nbreLivre = result[0].nbre_livre; // Utilisez nbre_livre au lieu de nbre_vendeurs
      res.status(200).json({ nbreLivre });
    }
  });
});








app.get('/shop', (req, res) => {
  const sql = `SELECT *
  FROM shop_order, product, status
  WHERE shop_order.id_product = product.id_product AND shop_order.id_status = status.id_status
  ORDER BY id_order DESC;
  `;
  
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      console.log (results)
    } else {
      res.json(results);
    }
  });
});


app.put("/update-status2/:orderId", (req, res) => {
  const orderId = req.params.orderId;

  // Mettez à jour le statut dans la base de données en utilisant votre ORM ou les requêtes SQL
  // Exemple avec une requête SQL (utilisez votre propre syntaxe)
  const updateQuery = `UPDATE shop_order SET id_status = 2 WHERE id_order = ?`;
  db.query(updateQuery, [orderId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la mise à jour du statut :", err);
      res.status(500).json({ message: "Erreur lors de la mise à jour du statut" });
    } else {
      res.status(200).json({ message: "Statut mis à jour avec succès" });
    }
  });
});



app.put("/update-status3/:orderId", (req, res) => {
  const orderId = req.params.orderId;

  // Mettez à jour le statut dans la base de données en utilisant votre ORM ou les requêtes SQL
  // Exemple avec une requête SQL (utilisez votre propre syntaxe)
  const updateQuery = `UPDATE shop_order SET id_status = 3 WHERE id_order = ?`;
  db.query(updateQuery, [orderId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la mise à jour du statut :", err);
      res.status(500).json({ message: "Erreur lors de la mise à jour du statut" });
    } else {
      res.status(200).json({ message: "Statut mis à jour avec succès" });
    }
  });
});


app.put("/update-status4/:orderId", (req, res) => {
  const orderId = req.params.orderId;

  // Mettez à jour le statut dans la base de données en utilisant votre ORM ou les requêtes SQL
  // Exemple avec une requête SQL (utilisez votre propre syntaxe)
  const updateQuery = `UPDATE shop_order SET id_status = 4 WHERE id_order = ?`;
  db.query(updateQuery, [orderId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la mise à jour du statut :", err);
      res.status(500).json({ message: "Erreur lors de la mise à jour du statut" });
    } else {
      res.status(200).json({ message: "Statut mis à jour avec succès" });
    }
  });
});

app.put("/update-status5/:orderId", (req, res) => {
  const orderId = req.params.orderId;

  // Mettez à jour le statut dans la base de données en utilisant votre ORM ou les requêtes SQL
  // Exemple avec une requête SQL (utilisez votre propre syntaxe)
  const updateQuery = `UPDATE shop_order SET id_status = 5 WHERE id_order = ?`;
  db.query(updateQuery, [orderId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la mise à jour du statut :", err);
      res.status(500).json({ message: "Erreur lors de la mise à jour du statut" });
    } else {
      res.status(200).json({ message: "Statut mis à jour avec succès" });
    }
  });
});


