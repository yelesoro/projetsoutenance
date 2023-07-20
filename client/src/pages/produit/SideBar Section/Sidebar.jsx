import './sidebar.scss'
import logo from'../../../ImageProduits/logoa.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {BsQuestionCircle} from 'react-icons/bs'

const Sidebar = () => {
    return (
        <div className='sideBar grid'>
           
            <div className='logoDiv flex'>
                <img src={logo} alt="logo de l'entreprise" />
                <h2>AGROBLOC </h2>
              
            </div>
            <div className="menuDiv">
                <h3 className="divTitle">
                    MENU
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Tableau de bord
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Produits dispo
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Explorer
                            </span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Produits
                            </span>
                        </a>
                    </li>
                </ul>
            </div>


            <div className="settingsDiv">
                <h3 className="divTitle">
                    PARAMETRES
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Graphes
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Trends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Contacts
                            </span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className = "icon"/>
                            <span className='smallText'>
                                Billings
                            </span>
                        </a>
                    </li>
                </ul>
            </div> 
            <div className="sideBarCard">
                <BsQuestionCircle className='icon'/>
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Centre pour aide</h3>
                    <p>Avez vous dess problèmes ? Contactez nous.</p>
                    <button className="btn">Aller sur le centre pour aide</button>

                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;