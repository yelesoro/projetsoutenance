import Top from "./Top Section/Top";
import logonous from '../../LoginAssets/nous.png'
import {MdOutlineMapsHomeWork} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'
import {BiCheckDouble} from 'react-icons/bi'
import { Link } from "react-router-dom";
import './body.scss'

const Body = () => {
    return (
        <div>
            <br /><br /><br /><br />
           <center><Top/></center><br /><br />
           <div className="about">
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
          
           </div>
        </div>
    );
};

export default Body;