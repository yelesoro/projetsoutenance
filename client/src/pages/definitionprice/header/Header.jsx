import { Link } from "react-router-dom";
import { FaSearch} from 'react-icons/fa';
 import {IoMdPerson} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import './header.scss'
import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa'
import {GiFruitBowl} from 'react-icons/gi'
import axios from "axios";
import { useEffect } from "react";

const Header = () => {
    
    const [isOpens, setIsOpens] = useState(false);

    const toggleSearch = () => {setIsOpens(!isOpens);       
};

    const [isOpenp, setIsOpenp] = useState(true);

    const togglepanier = () => {setIsOpenp(!isOpenp);       
};

const [totalCart, setTotalCart] = useState([]);

useEffect(() => {
  const apiUrl = "http://localhost:3002/total";

  axios
    .get(apiUrl)
    .then((response) => {
      setTotalCart(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des produits :", error);
    });
}, []);

    return (

            <header>
                <Link to={'/register'} className="iconname" > <GiFruitBowl className="icon"/>AGROBLOC</Link>
                <nav className="navbar">
                    <Link to={'/home'} className="link2">Accueil</Link>
                    <Link className="link1">Produits</Link>
                    <Link className="link">Historiques</Link>
                    <Link className="link">Graphes</Link>
                    <Link className="link">Comptes</Link> 
                </nav>
                 <div className="icons">
                    <div id = "search-btn"><FaSearch className = "icon" onClick={toggleSearch}/>   </div>

                    <div id = "cart-btn"><MdShoppingCart className="icon" onClick={togglepanier}/></div> 
                      
                    <div id = "login-btn"><IoMdPerson className="icon"/></div> 
{/* search part */}
                </div> 
                <form action="" className={`search-form ${isOpens ? 'opens' : 'closeds'}`}>
                    <input type="search" id="search-box" placeholder="Rechercher ici..." />
                    <label htmlFor="search-box" ><FaSearch/> </label>
                </form> 

{/* market part */}
                {totalCart.map(item=>(
                    <div className= {`shopping-cart ${isOpenp ? 'openp' : 'closedp'}`} key={item.id_item}>
                    <div className="box">
                        <FaTrashAlt className="icon"/>
                        <img src={item.product_image} alt="image "  height={'2rem'} width={'2rem'}/>
                        <div className="contente">
                            <h3>{item.product_name}</h3>
                            <span className="price"></span><br /><br />
                            <span className="quantity">Vendeur : {item.vendor_name}</span><br /><br />
                            <span className="quantity">Prix : {item.total_shop} frcs cfa</span><br /><br /> <span className="quantity">Quantité : {item.quantity} kg</span>

                        </div>

                        
                    </div>

                    <Link to={'/panier'}>
                    <div className="plus">
                        <center><p>Voir plus</p></center>

                    </div>
                    </Link>
                </div>
                ))}
            </header>
    );
};

export default Header;