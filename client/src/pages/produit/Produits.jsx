import Header from "./header/Header";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
 '../../ImageProduits/ananas.jpg'
 import { Link } from "react-router-dom";
import ananas from '../../ImageProduits/ananas.jpg'

import './produits.scss'


const Produits = () => {
    
    return (
        
       <div>
             <Header/>
             <div className="sidebar">
             </div>
             <div className="gallery" id="gallery">
             <center> <div className="tete"><h1 className="heading">NOS <span>PRODUITS</span></h1></div></center><br /><br />

                <div className="box-container">
                    <div className="box">
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>Délicieux plats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br /><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
                        </div>
                    </div><br />

                    <div className="box">
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>Délicieux plats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
                        </div>
                    </div><br />

                    <div className="box">
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>Délicieux plats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
                        </div>
                    </div><br />

                    <div className="box">
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>Délicieux plats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
                        </div>
                    </div><br />

                    <div className="box">
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>Délicieux plats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
                        </div>
                    </div><br />

                    <div className="box">
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>Délicieux plats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
                        </div>
                    </div><br />
                </div>

             </div>
             


            </div>
    
    );
};

export default Produits;