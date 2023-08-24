

import { useState, useEffect } from "react";
import Header from "./header/Header";
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { BiSolidPhone } from 'react-icons/bi';
import { useParams } from "react-router-dom";
import './vendeurs.scss';
import axios from "axios";
import { Link } from "react-router-dom";
import { useVendor } from "../../contexts/VendorContext";


const Vendeurs = () => {
  const { vendorInfo, setVendorInfo } = useVendor();
  const { vendorStock, setVendorStock } = useVendor();

  const { productId } = useParams();
  const [vendeurs, setVendeurs] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:3002/product/${productId}/sellers`;

    axios.get(apiUrl)
      .then(response => {
        setVendeurs(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données des vendeurs :', error);
      });
  }, [productId]);

  const handleVendorClick = (id_vendor, id_user, nom, phone) => {
    setVendorInfo({
      id_vendor,
      id_user,
      nom,
      phone
    });
  };

  const handleVendorstockClick = (id_stock, quantity, desription) => {
    setVendorStock({
      id_stock,
      quantity,
      desription,
    });
  };



  return (
    <div className="containe">
      <Header />
      <div className="bigdiv">
        {vendeurs.map(vendeur =>(
            <div className="fruit" key={vendeur.id} >
            <img src={`${vendeur.image}`} alt="" className="image8"/>
          </div>

        ))}
        
        <div className="review" id="Review">
          <center>
            <div className="tete">
              <h1 className="heading">NOS <span>VENDEURS</span></h1>
            </div>
          </center>
          <div className="review_box">
            {vendeurs.map(vendeur => (
              <div className="review_card" key={vendeur.id}>
                <Link  className="lien1"
                to={`/add-to-cart/${vendeur.id}`}
                onClick={() => {
                  handleVendorClick(vendeur.id, vendeur.id_user, vendeur.nom, vendeur.phone);
                  handleVendorstockClick(vendeur.id_stock, vendeur.stockQuantity, vendeur.description);
                }}>
                <div className="review_profile" >
                  <img src={`${vendeur.vendor_image}`} />
                </div>
                <div className="review_text">
                  <h2 className="name">{vendeur.nom}</h2>
                
                  <div className="review_social">
                    <BsFacebook className="i" />
                    <BsWhatsapp className="i" />
                    <BiSolidPhone className="i" />
                  </div>
                  <div>
                    <p>
                      <span>STATUT : </span>
                      {vendeur.status} <br />
                      <span>DESCRIPTION VENDEUR : </span>
                      {vendeur.vendorDescription} <br />
                      <span>QUANTITÉ DISPONIBLE EN STOCK : </span>
                      {vendeur.stockQuantity} <br />
                      <span>DESCRIPTION DU STOCK : </span>
                      {vendeur.stockDescription}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendeurs;
