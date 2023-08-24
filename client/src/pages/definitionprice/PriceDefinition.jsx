import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import ananas from "../../ImageProduits/caco.png";
import "./pricedefinition.scss";
import { Link, useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useUser } from "../../contexts/UserContext";
import { useProduct } from "../../contexts/ProductContext";
import { useVendor } from "../../contexts/VendorContext";
import { useCart } from "../../contexts/CartContext";


const PriceDefinition = () => {

  const [quantity, setQuantity] = useState("");
  const [totalShop, setTotalShop] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const { vendorId } = useParams();
//user
  const { user } = useUser();
  const userId = user.id;   console.log(userId)

  //products
  const { productInfo } = useProduct();
  const productId = productInfo.id;console.log(productId)
  const productName = productInfo.name;
  const productPrice = productInfo.price;
  const productImage = productInfo.image;
//vendor_stock

//cart
const {cartId} = useCart();

//
const {vendorInfo} = useVendor();
const vendor_name = vendorInfo.nom;

const {vendorStock} = useVendor();
const vendor_stock = vendorStock.quantity;


  const handleInputChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    setTotalShop(parseInt(quantity) * productPrice);
  }, [quantity]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const createpanier = async (e) => {

      e.preventDefault();

      const CartData = {productId, quantity, totalShop, cartId };
  
      try {
        const response = await axios.post(`http://localhost:3002/add-to-cart/${vendorId}`, CartData);
        console.log("Données du panier ajoutées avec succès :", response.data);
        togglePopup();
      } catch (error) {
        console.error("Erreur lors de l'ajout au panier :", error);
      }

     };

  return (
    <div>
      <Header />
      <div className="box-definition">
        <div className="imagediv">
          <img src={`${productImage}`} alt="" className="image" />
        </div>
        <div className="textdiv">
          <h1>
            Produit {productName} chez le vendeur <span>{vendor_name}</span>
          </h1>
          <h2>
            prix bord champs: <span>{productPrice} frcs/kg</span>
          </h2>
          <br />
          <br />
          <br />
          <h2>
            Quantité disponible: <span>{vendor_stock} kg </span>
          </h2>
          <br />
          <br />
          <br />
          <div className="quantity">
            <label htmlFor="">Entrez le poids voulu(en Kilograme)</label>
            <br />
            <br />
            <div className="inputdiv">
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                placeholder="Entrez le poids svp"
              />
            </div>{" "}
            <br />
            <br />
            <br />
            <p className="resultat">
              Prix à payer :<span> {totalShop} frcs</span>
            </p>
          </div>
        </div>

        <div className="boutton">
          <button onClick={createpanier}>
            <span>Ajouter au panier</span>
            <MdOutlineAddShoppingCart className="i" />
          </button>
        </div>
        {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Merci pour l'ajout</h2>
              <p>Continuer vers d'autres achats </p>
              <button onClick={togglePopup} className="boutton">
                Fermer
              </button>
              <br />
              <button className="boutton">Aller au panier</button>
              <br />
              <Link to={"/produits"}>
                <button className="boutton"> Produits</button>
              </Link>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceDefinition;
















// import Header from "./header/Header";
// import ananas from "../../ImageProduits/caco.png";
// import "./pricedefinition.scss";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { MdOutlineAddShoppingCart } from "react-icons/md";

// const PriceDefinition = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [result, setResult] = useState(0);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   useEffect(() => {
//     // Effectuez ici vos calculs en fonction de l'inputValue à chaque changement
//     // Exemple : Addition de 10 à l'inputValue
//     setResult(parseInt(inputValue) * 900);
//   }, [inputValue]); // Le tableau [inputValue] indique que ce useEffect sera exécuté à chaque changement de l'inputValue

//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="box-definition">
//         <div className="imagediv">
//           <img src={ananas} alt="" className="image" />
//         </div>
//         <div className="textdiv">
//           <h1>
//             Produit  chez le vendeur <span> Monsieur Kouakou</span>{" "}
//           </h1>
//           <h2>
//             prix bord champs: <span>900frcs/kg</span>
//           </h2>
//           <br />
//           <br />
//           <br />
//           <h2>
//             Quantité disponible: <span>1525 kg</span>{" "}
//           </h2>
//           <br />
//           <br />
//           <br />
//           <div className="quantity">
//             <label htmlFor="">Entrez le poids voulu(en Kilograme)</label>
//             <br />
//             <br />
//             <div className="inputdiv">
//               <input
//                 type="number"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 placeholder="Entrez le poids svp"
//               />
//             </div>{" "}
//             <br />
//             <br />
//             <br />
//             <p className="resultat">
//               Prix à payer :<span> {result} frcs</span>
//             </p>
//           </div>
//         </div>

//         <div className="boutton">
//           <Link>
//             <button onClick={togglePopup}>
//               <span>Ajouter au panier</span>
//               <MdOutlineAddShoppingCart className="i" />
//             </button>
//           </Link>
//         </div>
//         {isOpen && (
//           <div className="popup">
//             <div className="popup-content">
//               <h2>Merci pour lajout</h2>
//               <p>Continuer vers dautres achats </p>
//               <button onClick={togglePopup} className="boutton">
//                 Fermer
//               </button>
//               <br />
//               <button className="boutton">Aller au panier</button>
//               <br />
//               <Link to={"/produits"}>
//                 <button className="boutton"> Produits</button>
//               </Link>
//               <br />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PriceDefinition;
