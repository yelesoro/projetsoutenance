import { Link } from "react-router-dom";
import { FaSearch} from 'react-icons/fa';
 import {IoMdPerson} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import './header.scss'
import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa'
import {GiFruitBowl} from 'react-icons/gi'
import logo from '../../LoginAssets/logo.png'

const Header = () => {
    
    const [isOpens, setIsOpens] = useState(false);

    const toggleSearch = () => {setIsOpens(!isOpens);       
};

    const [isOpenp, setIsOpenp] = useState(true);

    const togglepanier = () => {setIsOpenp(!isOpenp);       
};

    return (

            <header>
                <Link to={'/register'} className="iconname" > <GiFruitBowl className="icon"/>AGROBLOC</Link>
                <nav className="navbar">
                    <Link className="link1">Accueil</Link>
                    <Link to={'/produits'} className="link2">Produits</Link>
                    <Link className="link" to={'/historique'}>Historique</Link>
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
                <div className= {`shopping-cart ${isOpenp ? 'openp' : 'closedp'}`}>
                    <div className="box">
                        <FaTrashAlt className="icon"/>
                        <img src={logo} alt="image " />
                        <div className="content">
                            <h3>logo</h3>
                            <span className="price"></span>
                            <span className="quantity">qté: 1</span>

                        </div>

                        
                    </div>

                    <div className="box">
                        <FaTrashAlt className="icon"/>
                        <img src={logo} alt="image " />
                        <div className="content">
                            <h3>logo</h3>
                            <span className="price"></span>
                            <span className="quantity">qté: 1</span>

                        </div>

                        
                    </div>

                    <div className="box">
                        <FaTrashAlt className="icon"/>
                        <img src={logo} alt="image " />
                        <div className="content">
                            <h3>logo</h3>
                            <span className="price"></span>
                            <span className="quantity">qté: 1</span>

                        </div>

                        
                    </div>

                    <Link to={'/panier'}>
                    <div className="plus">
                        <center><p>Voir plus</p></center>

                    </div>
                    </Link>
                </div>
            </header>
    );
};

export default Header;