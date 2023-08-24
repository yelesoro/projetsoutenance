import Header from "../vendeurs/header/Header";
import cacao from "../../ImageProduits/caco.png";
import { FaTimes } from "react-icons/fa";
import "./panier.scss";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useProduct } from "../../contexts/ProductContext";
import { useVendor } from "../../contexts/VendorContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Panier = () => {
  //user
  const { user } = useUser();
  const userid = user.id_user;
  //products
  const { productInfo } = useProduct();
  const productId = productInfo.id;
  const productName = productInfo.name;
  const productPrice = productInfo.price;
  const productImage = productInfo.image;
  const [shoppingCart, setShoppingCart] = useState([]);

  const [total_order, setTotalOrder] = useState(0);
  const [total_price, setTotalPrice] = useState(0);


  useEffect(() => {
    const apiUrl = "http://localhost:3002/shopping-cart";

    axios
      .get(apiUrl)
      .then((response) => {
        setShoppingCart(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  const [totalCart, setTotalCart] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3002/total";

    axios
      .get(apiUrl)
      .then((response) => {
        setTotalCart(response.data);
        setTotalOrder(response.data[0].total_poids);
        setTotalPrice(response.data[0].total_vente)
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  const [shoppingAdress, setShoppingAdress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/commande", {
        id_user : userid,
        id_product : productId,
        shopping_adress: shoppingAdress,
        total_order, 
        total_price,
        description: description,
      });

      console.log(response.data.message);
      // Réinitialisez les champs du formulaire si nécessaire
      setShoppingAdress("");
      setDescription("");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="boxdiv">
        <div className="shopping-cart-container">
          <div className="products-container">
            <center>
              <h3 className="title">
                VOS PRODUITS CHOISIS <span className="ti">{productName}</span>
              </h3>
            </center>
            <div className="box-container">
              {shoppingCart.map((item) => (
                <div className="box" key={item.id_item}>
                  <FaTimes className="icone" />
                  <img src={item.product_image} className="im" alt="" />
                  <div className="content">
                    <span style={{ fontWeight: "600" }}>
                      quantité :{" "}
                      <span className="price">{item.quantity} kg</span>{" "}
                    </span>
                    <br />
                    <br />

                    <span style={{ fontWeight: "600" }}>
                      Vendeur :{" "}
                      <span className="price">{item.vendor_name} </span>
                    </span>
                    <br />
                    <br />
                    <span style={{ fontWeight: "600" }}>
                      Prix :{" "}
                      <span className="price">{item.total_shop} frcs cfa </span>{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partie info */}
          <div className="infos">
            <center>
              <h3 className="title">INFOS DE LIVRAISON</h3>
            </center>
            <div className="box-container">
              <div className="box">
                <form >
                  {/* Input fields for shopping_adress and description */}
                  <div className="form1">
                  <label htmlFor="" className="h1">Adresse de livraison</label>
                  <input
                  className="btn1"
                    type="text"
                    value={shoppingAdress}
                    onChange={(e) => setShoppingAdress(e.target.value)}
                    placeholder="Adresse de livraison"
                  />
                    </div><br /><br />
                  <div className="form1">
                  <label htmlFor="" className="h1">Détails sur la livraison</label>
                  <textarea
                  rows={4}
                  cols={50}
                  className="btn1"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description de la commande"
                  />

                    </div>
                  {/* Submit button */}
                  
                </form>
              </div>
            </div>
          </div>

          {/* partie total */}

          {totalCart.map((item) => (
            <div className="cart-total" key={item.id_item}>
              <h3 className="title"> TOTAL ACHAT</h3>
              <div className="box">
                <div className="h3"></div>
                <h3 className="total">
                  Poids total : <span>{item.total_poids} kg</span>
                </h3>
                <br />
                <h3 className="total">
                  total des achats : <span>{item.total_vente} frcs cfa</span>
                </h3>
                <center>
                  <Link to={"/hisEnCours"} className="btn21" onClick={handleSubmit}>
                    Valider la commande
                  </Link>
                  <Link className="btn22" to={"/produits"}>
                    Annuler la commande
                  </Link>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panier;
