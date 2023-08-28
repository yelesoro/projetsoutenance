// @flow strict
import Header from "../historique/header/Header";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {BsFillTelephoneFill, } from "react-icons/bs"
import './shopDetails.scss'
import { useParams } from "react-router-dom";
import { format } from "date-fns";


function ShopDetails() {

    const { id_order } = useParams();
    const[details, setDetails] = useState([]);
    const [shopdetails, setShopDetails] = useState([])
    useEffect(() => {
        const apiUrl = `http://localhost:3002/ordersdetails/${id_order}`;
    
        axios.get(apiUrl)
          .then(response => {
            setDetails(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données des vendeurs :', error);
          });
      }, [id_order]);
      console.log(details)

      useEffect(() => {
        const apiUrl = `http://localhost:3002/shopdetails/${id_order}`;
    
        axios.get(apiUrl)
          .then(response => {
            setShopDetails(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données des vendeurs :', error);
          });
      }, [id_order]);
      console.log(shopdetails)




  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
        <Header/>   
      <div className="cont">
      <h1>DETAILS DE LA COMMANDE</h1>
      <div className="bigdi">
        <div className="review3" id="Review">
          <div className="review_box3">
          {shopdetails.map(item=>(
            <div className="review_card23" key={item.id_order}>
            <div className="review_profile"> </div>
                  <br />
                  <div className="review_text">
                    <h2 className="name">Infos détaillées </h2>
                    <br />
                    <br />
                    <div>
                      <p className="divtext">
                        <span>Jour  :  </span>
                        {format(new Date(item.order_date), 'dd/MM/yyyy')} 
                      </p><br />
                      <br />
                      <p>
                        <span>Produit : </span>
                        {item.name} 
                      </p><br /><br />
                      <p>
                        <span>Lieu de livraison : </span>
                        {item.shopping_adress}
                      </p>

                      <br />
                    </div>
                 
                    
                  </div>
              </div>
          ))}

                {details.map((item, index)=>(
                    <div className="review_card3" key={item.id_order_line}>
                    <div className="review_profile"> </div>
                    <br />
                    <div className="review_text">
                      <h2 className="name">Vendeur n° {index+1}</h2>
                      <div>
                      <center><img src={item.vendor_image} alt="" className="im" /></center>

                        <p className="divtext">
                          <span>Nom et prénom: </span>
                          {item.name}
                        </p>
                        <br />
                        <p>
                          <span>Région: </span>
                          Bouake
                        </p>
                        <br />
                        <p>
                          <span>Quantité demandée </span>
                          {item.quantity} kg
                        </p>
                        <br />
                        <p>
                          <span>Prix associé: </span>{item.price} frcs cfa
                          
                        </p>
                        <br />
                        <p>
                          <span>Statut:  </span>
                          {item.statut}
                        </p>
                      </div>
                      <br />
                      <br />
                      <div>
                        <button className="boutto" onClick={togglePopup}>
                          Contacter le vendeur
                        </button>
                      </div>
                      
                    </div>
                  </div>
                ))}

          </div>
          {isOpen && (
                    <div className="popup">
                      <div className="popup-content">
                        <h2>Comment le contacter</h2><br />
                        <div>
                          <BsFillTelephoneFill className="i"/>
                          O77828327813
                        </div>
                        <div><br />
                          <BsWhatsapp className="i"/>
                          O77828327813
                        </div>
                        <button onClick={togglePopup} className="btn">
                          Fermer
                        </button>
  
                      
                        <br />
                      </div>
                    </div>
                  )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default ShopDetails;
