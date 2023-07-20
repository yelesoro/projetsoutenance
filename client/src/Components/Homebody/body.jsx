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
           <center><div className="h3"><h3>NOS SERVICES</h3></div></center>
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




           {/* <div className="about">
            <div className="text">
                <h3 className="bub-heading">NOS SERVICES</h3>
            </div>
            <div className="row">

                <div className="image"  >
                    <img src={logonous} alt="image de produits" />
                </div>

                <div className="content">
                    <h3>Produits agricoles </h3>
                    <p>AGROBLOC est une structure Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quos quo nisi. Error adipisci nam dolore sequi, alias rem illum ab culpa beatae quasi ullam a voluptates, corrupti nisi consequatur!</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet sapiente vel commodi officia doloremque ab repellendus numquam corrupti? Facilis pariatur a illo aut ad temporibus sed, iure sint saepe.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <MdOutlineMapsHomeWork/>
                            <span>Tracabilité des produits</span>

                        </div>

                        <div className="icons">
                            <GiMoneyStack/>
                            <span>Paiements facile et sécurisés </span>

                        </div>

                        <div className="icons">
                            <BiCheckDouble/>
                            <span>Des produits aux prix bord-champs </span>

                        </div>

                    </div>
                    <br /><br />
                    <Link className="btn" id = "learn">Voir plus</Link>
                </div>
            

            </div>
          
           </div> */}
        </div>
    );
};

export default Body;