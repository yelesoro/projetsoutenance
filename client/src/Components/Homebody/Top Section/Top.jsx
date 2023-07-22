import './top.scss'
import video from '../../../LoginAssets/video3.mp4'
// import {BsQuestionCircle} from 'react-icons/bs'
import legume from '../../../ImageProduits/legume.png'
import { Link } from 'react-router-dom'
// import patate from '../../../../ImageProduits/patate.jpg'
// import orange from '../../../../ImageProduits/orangediarra.png'
// import coton from '../../../../ImageProduits/cot.jpg'
// import avocat from '../../../../ImageProduits/avocat.jpg'
// import banane from '../../../../ImageProduits/banane.png'


import {BsArrowRightShort} from 'react-icons/bs'

const Top = () => {

    return(
        <div className="topSection">
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Achète des produits agrcoles aux prix bord-champs</h1>
                    <p>Le monde de la culture agricole</p>

                    <div className="buttons flex">
                        <button className="btn">Voir plus</button>
                        <button className="btn transparent">Meilleurs vendeurs</button>
                    </div>
                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>
                <div className="leftCard flex">
                <div className="main flex">

                    <div className="textDiv">
                        <h1>Mes statistiques</h1>
                        <div className="flex">
                            <span className='span1'>
                                Aujourdhui <br /><small className='small1'>4 Produits</small>
                            </span>

                            <span className='span1'>
                                Ce mois <br /><small className='small1'>127 Produits</small>
                            </span>
                        </div>
                        <Link to={'/produits'}>
                        <span className='flex link'>
                                Aller sur les produits <BsArrowRightShort className='icon'/>
                        </span>
                        </Link>
                        

                    </div>

                    <div className="imgDiv">
                        <img src={legume} alt="images" />
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
   
};

export default Top;