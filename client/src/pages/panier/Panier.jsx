import Header from "../vendeurs/header/Header";
import cacao from '../../ImageProduits/caco.png'
import {FaTimes} from 'react-icons/fa'
import './panier.scss'
import { Link } from "react-router-dom";

const Panier = () => {
    return (
        <div>
            <Header/>
            <div className="boxdiv">
            <div className="shopping-cart-container">
                    
                    <div className="products-container">
                    <center><h3 className="title">VOS PRODUITS CHOISIS</h3></center>
                    <div className="box-container">
                    <div className="box">   
                            <FaTimes className="icone"/>
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3><br />
                                <span>quantité : </span>
                                <input type="text" placeholder="entrez le poids" /><br /><br />
                                <span>Vendeur :  <span className="price">ddd </span></span><br /><br />
                                <span>Prix : <span className="price">ddd </span>  </span>
                                
                            </div>
                        </div>

                        <div className="box">   
                            <FaTimes className="icone"/>
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3><br />
                                <span>quantité : </span>
                                <input type="text" /><br /><br />
                                <span>Vendeur :  <span className="price">ddd </span></span><br /><br />
                                <span>Prix : <span className="price">ddd </span>  </span>
                                
                            </div>
                        </div>

                        <div className="box">   
                            <FaTimes className="icone"/>
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3><br />
                                <span>quantité : </span>
                                <input type="text" /><br /><br />
                                <span>Vendeur :  <span className="price">ddd </span></span><br /><br />
                                <span>Prix : <span className="price">ddd </span>  </span>
                                
                            </div>
                        </div>

                        <div className="box">   
                            <FaTimes className="icone"/>
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3><br />
                                <span>quantité : </span>
                                <input type="text" /><br /><br />
                                <span>Vendeur :  <span className="price">ddd </span></span><br /><br />
                                <span>Prix : <span className="price">ddd </span>  </span>
                                
                            </div>
                        </div>


                        <div className="box">   
                            <FaTimes className="icone"/>
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3><br />
                                <span>quantité : </span>
                                <input type="text" /><br /><br />
                                <span>Vendeur :  <span className="price">ddd </span></span><br /><br />
                                <span>Prix : <span className="price">ddd </span>  </span>
                                
                            </div>
                        </div>

                        <div className="box">   
                            <FaTimes className="icone"/>
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3><br />
                                <span>quantité : </span>
                                <input type="text" /><br /><br />
                                <span>Vendeur :  <span className="price">ddd </span></span><br /><br />
                                <span>Prix : <span className="price">ddd </span>  </span>
                                
                            </div>
                        </div>

                       
                    </div>
                    
                    </div>

{/* Partie info */}
                    <div className="infos">
                    <center><h3 className="title">VOS PRODUITS CHOISIS</h3></center>
                    <div className="box-container">
                        <div className="box">   
                            <img src={cacao} alt="" />  
                            <div className="content">
                                <h3>Cacao</h3>
                                <span>quantité : </span>
                                <input type="text" /><br />
                                <span>Prix : </span>
                                <span className="price">ddd </span> 
                            </div>
                        </div>

                       
                    </div>
                    
                    </div>


                    <div className="cart-total">
                        <h3 className="title"> TOTAL ACHAT</h3>
                        <div className="box">
                               <div className="h3">
                               <h3 className="subtotal1">Total produits : <span>200frcs</span></h3>
                                <h3 className="subtotal2">Livraison : <span>200frcs</span></h3>
                               </div>
                                <h3 className="total">total : <span>
                                    200frcs</span></h3>
                                    <Link className="btn1" to={'/historique'}>Valider la commande</Link>
                            </div>
                    </div>

                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default Panier;