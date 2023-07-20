import Header from "./header/Header";
import vendeur from '../../LoginAssets/seller.jpeg';
import './vendeurs.scss'
import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BiSolidPhone} from 'react-icons/bi'
import ananas from '../../ImageProduits/anas.png'
import { Link } from "react-router-dom";

const Vendeurs = () => {
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
                <div className="review_box">
                    <Link className="lien" to={'/priceDefinition'} >
                    <div className="review_card">
                        <div className="review_profile"> <img src={vendeur} alt="" /></div>
                        <div className="review_text">
                        <h2 className="name">Konan diro</h2>
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
                         ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque, sapiente dolores!

                        </p></div>
                        
                    </div>
                    </div></Link>

                    <div className="review_card">
                        <div className="review_profile"> <img src={vendeur} alt="" /></div>
                        <div className="review_text">
                        <h2 className="name">Konan diro</h2>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque, sapiente dolores!

                        </p></div>
                        
                    </div>
                    </div>


                    <div className="review_card">
                        <div className="review_profile"> <img src={vendeur} alt="" /></div>
                        <div className="review_text">
                        <h2 className="name">Konan diro</h2>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque, sapiente dolores!

                        </p></div>
                        
                    </div>
                    </div>


                    
                    
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Vendeurs;