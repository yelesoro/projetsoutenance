import Top from "./Top Section/Top";
// import logonous from '../../LoginAssets/nous.png'
// import {MdOutlineMapsHomeWork} from 'react-icons/md'
// import {GiMoneyStack} from 'react-icons/gi'
// import {BiCheckDouble} from 'react-icons/bi'
// import { Link } from "react-router-dom";
import vendeur from '../../ImageProduits/vendeur.png'
import produit from '../../ImageProduits/produits.png'
import steper from '../../ImageProduits/stepper.png'
import paiement from '../../ImageProduits/paiement.png'
import './body.scss'

const Body = () => {
    return (
        <div>
            <br /><br /><br /><br />
           <center><Top/></center><br /><br />
           <center><div className="h3"><h3>NOS <span>SERVICES </span></h3></div></center>
           <div className="steps">
           <div className="box">
            <img src={vendeur} alt="image vendeur" />
            <h3>Rencontre plus de vendeurs</h3>
           </div>
           <div className="box">
            <img src={produit} alt="image produit" />
            <h3>Produits aux prix bord champs</h3>
           </div>
           <div className="box">
            <img src={steper} alt="image stepper" />
            <h3>Suivi du produits</h3>
           </div>
           <div className="box">
            <img src={paiement} alt="image paiement" />
            <h3>Paiements faciles et sécurisés</h3>
           </div>
           </div>
        </div>
    );
};

export default Body;