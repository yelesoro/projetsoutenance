import Header from "./header/Header";
import './vendeurs.scss'
import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BiSolidPhone} from 'react-icons/bi'
import ananas from '../../ImageProduits/caco.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const Vendeurs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://192.168.252.74:8082/planteur/viewPlanteur.php';
    
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
        <div className="container">
            <Header/>
            <div className="bigdiv">
                <div className="fruit">
                    <img src={ananas} alt="" />
                </div>
                <div className="review" id="Review">
                <center><div className="tete">
                <h1 className="heading">NOS <span>VENDEURS</span></h1></div></center>
                    <div className="review_box" >
                    {data.map(item=>(

                    <div className="review_card" key={item.id}>
                    <div className="review_profile"> <img alt="" /></div>

                       
                    <Link className="lien" to={'/priceDefinition'} >
  <div className="review_text" key={item}>
                            <h2 className="name">{item.Nom_planteur}</h2>
                            <h2 className="name">{item.Pren_planteur}</h2>
                            <div className="review_icon">
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <BiSolidStarHalf className="i" />
                                <AiOutlineStar className="i" />
    
                            </div>
                            <div className="review_social">
                                <BsFacebook className="i"/>
                                <BsWhatsapp className="i"/>
                                <BiSolidPhone className="i"/>
    
                            </div>
                            <div><p>
                                <span>REGION: </span>
                            Lorem <br /><br />
                            <span>INFOS: </span>
                             ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque,<br /><span> QUANTITE DISPONIBLE:</span>
    
                            </p></div>
                            
                        </div></Link>
                        
                    </div>                ))}
  
                </div>

                </div>
                
                
            </div>
            </div>
    );
};

export default Vendeurs;