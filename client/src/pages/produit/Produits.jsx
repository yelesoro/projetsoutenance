import Header from "./header/Header";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
 '../../ImageProduits/ananas.jpg'
 import { Link } from "react-router-dom";
import ananas from '../../ImageProduits/caco.png'
// import tomate from '../../ImageProduits/tomatediarra.png'
import { useState, useEffect } from "react";
import axios from "axios";

import './produits.scss'


const Produits = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/api/get';
    
        // Appel à l'API avec Axios
        axios.get(apiUrl)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      }, []);

    
    return (
        
       <div>
             <Header/>
             <div className="sidebar">
             </div>
             <div className="gallery" id="gallery">
             <center> <div className="tete"><h1 className="heading">NOS <span>PRODUITS</span></h1></div></center><br /><br />

                <div className="box-container">
                    {data.map(item=>(
                        <div className="box" key={item.id}>
                        <img src={ananas} alt="image anans" />
                        <div className="content">
                            <h3>{item.nomEtud}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur </p><br /><br />
                            <Link to={'/vendeurs'}><span className="btna">Acheter</span></Link>
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