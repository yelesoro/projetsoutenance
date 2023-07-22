import Header from "./header/Header";
import ananas from "../../ImageProduits/caco.png";
import './pricedefinition.scss'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import{MdOutlineAddShoppingCart} from 'react-icons/md'

const PriceDefinition = () => {

    const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    // Effectuez ici vos calculs en fonction de l'inputValue à chaque changement
    // Exemple : Addition de 10 à l'inputValue
    setResult(parseInt(inputValue) * 900);
  }, [inputValue]); // Le tableau [inputValue] indique que ce useEffect sera exécuté à chaque changement de l'inputValue

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div>
            <Header/>
            <div className="box-definition">
                <div className="imagediv">
                    <img src={ananas} alt="" className="image"/>
                </div>
                <div className="textdiv">
                    <h1>Produit Cacao chez le vendeur <span> Monsieur Kouakou</span> </h1>
                    <h2>prix bord champs: <span>900frcs/kg</span></h2><br /><br /><br />
                    <h2>Quantité disponible: <span>1525 kg</span> </h2><br /><br /><br />
                    <div className="quantity">
                        <label htmlFor="">Entrez le poids voulu(en Kilograme)</label><br /><br />
                        <div className="inputdiv">
                        <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Entrez le poids svp"/></div> <br /><br /><br />
      <p className="resultat">Prix à payer :<span> {result} frcs</span></p>
                    </div>
                    
                </div>

                <div className="boutton">
                <Link><button onClick={togglePopup}>
                    <span>Ajouter au panier</span>
                    <MdOutlineAddShoppingCart className="i"/>
                    </button></Link>
                </div>
                {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Merci pour lajout</h2>
            <p>Continuer vers dautres achats </p>
            <button onClick={togglePopup} className="boutton">Fermer</button><br />
            <button className="boutton">Aller au panier</button><br />
            <Link to={'/produits'}>
            <button className="boutton">  Produits</button>
                </Link><br />
          </div>
        </div>
      )}

            </div>
        </div>
    );
};

export default PriceDefinition;