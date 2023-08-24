import  { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import { Link } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContext"; // Importez le hook useProduct
import './produits.scss';
import { useCart } from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserContext"; // Assurez-vous d'importer correctement le contexte utilisateur



const Produits = () => {
  const [products, setProducts] = useState([]);
  const { productInfo,setProductInfo } = useProduct(); // Obtenez la pfonction setProductInfo depuis le contexte
  const { cartId, setCartId } = useCart();
  const { user } = useUser(); // Utilisation du contexte utilisateur
  const userId = user.id_user; 




  useEffect(() => {
    const apiUrl = "http://localhost:3002/products";

    axios
      .get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
      });
  }, []);

  // Définir une fonction pour mettre à jour les informations du produit dans le contexte
  const handleProductClick = (id, name, price, image) => {
    setProductInfo({
      id,
      name,
      price,
      image
    });
    console.log (productInfo)
  };

  const createPanier = async () => {
    const CartData = { userId };

    try {
      const response = await axios.post(`http://localhost:3002/panier`, CartData);
      console.log("Création du panier avec succes :", response.data);

      // Mettre à jour l'ID du panier dans le contexte
      setCartId(response.data.cartId);
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier :", error);
    }
  };


  return (
    <div>
      <Header />
      <div className="sidebar"></div>
      <div className="gallery" id="gallery">
        <center>
          <div className="tete">
            <h1 className="heading">
              NOS <span>PRODUITS</span>
            </h1>
          </div>
        </center>
        <br />
        <br />

        <div className="box-container">
          {products.map(item => (
            <div
              className="box"
              key={item.id_product}
              
            >
              <center>
                <img
                  src={`${item.product_image}`}
                  alt="image du produit"
                  style={{ display: "block", width: "100%", height: "220px" }}
                />
              </center>
              <div className="content">
                <h3>{item.name}</h3>
                <h1>prix : {item.price}</h1><br />
                <p>{item.description}</p>
                <br />
                <br />
                <Link to={`/product/${item.id_product}/sellers`} onClick={() => {
                  handleProductClick(item.id_product, item.name, item.price, item.product_image);
                  createPanier(userId)

                }}>
                  <span className="btna">Acheter</span>
                </Link>
              </div>
            </div>
          ))}
          <br />
        </div>
      </div>
    </div>
  );
};
export default Produits;


// import  { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "./header/Header";
// import { Link } from "react-router-dom";
// import './produits.scss';
// import { useProduct } from "../../contexts/ProductContext";


// const Produits = () => {
//   const { setSelectedProductId } = useProduct();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const apiUrl = "http://localhost:3002/products";

//     // Appel à l'API avec Axios pour obtenir la liste des produits
//     axios
//       .get(apiUrl)
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des produits :', error);
//       });
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="sidebar"></div>
//       <div className="gallery" id="gallery">
//         <center>
//           <div className="tete">
//             <h1 className="heading">
//               NOS <span>PRODUITS</span>
//             </h1>
//           </div>
//         </center>
//         <br />
//         <br />

//         <div className="box-container">
//           {products.map(item => (
//             <div className="box" key={item.id_product}>
//               <center>
//                 <img
//                   src={`${item.product_image}`}
//                   alt="image du produit"
//                   style={{ display: "block", width: "100%", height: "220px" }}
//                 />
//               </center>
//               <div className="content">
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//                 <br />
//                 <br />
//                 <Link to={`/product/${item.id_product}/sellers`} onClick={() => setSelectedProductId(item.id_product)}>
//                   <span className="btna">Vendeurs</span>
//                 </Link>
//               </div>
//             </div>
//           ))}
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Produits;
