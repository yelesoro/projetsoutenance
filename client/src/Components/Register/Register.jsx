import { useState } from 'react';
import './Register.scss'
import video from '../../LoginAssets/video2.mp4'
import logo from'../../LoginAssets/logo.png'
import { Link } from 'react-router-dom';
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import '../../App.scss'
import axios from 'axios';


const Register = () => {
    //Usestate to holds the inputs
    const [name, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    const createUser = async (e) => {

        e.preventDefault();

        const formData = { name, phone, password };

        try {
            const response = await axios.post('http://localhost:3002/register', formData);
            console.log(response.data.message);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement des données :', error);
        }
         };

    return (
        <div className='registerPage flex '>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>
                    <div className="textDiv">
                        <h2 className='title'>Connecte toi et Achète des produits agricoles de qualité</h2>
                        <p>Prend gout aux produits agricoles aux prix homologués</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Vous avez deja un compte?  </span>
                        <Link to={'/'}>
                        <button className="btn">Connectez-vous</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logo de Agrobloc" />
                        <h3>Laissez nous vous connaitre!</h3>
                    </div>
                    <form action="" className='form grid'>
                       
                      
                        <div className="inputDiv">
                            <label htmlFor="name">Nom utilisateur</label>
                            <div className="input flex">
                            <FaUserShield className ='icon'/>
                                <input type="text" id = 'name' placeholder='Entrer votre nom' value={name} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div><br />

                        <div className="inputDiv">
                            <label htmlFor="phone">Phone</label>
                            <div className="input flex">
                            <MdEmail className ='icon'/>
                                <input type="text" id = 'phone' placeholder='Entrer votre telephone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div><br />

                        <div className="inputDiv">
                            <label htmlFor="password">Mot de passe</label>
                            <div className="input flex">
                            <BsFillShieldLockFill className ='icon'/>
                                <input type="password" id = 'password' placeholder='Entrer votre mot de passe'value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div><br /><br />
                        
                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Inscription</span>
                            <AiOutlineSwapRight className='icon'/>

                        </button>
                        <span className='forgotPassword'>
                            Avez vous oublié votre mot de passe? <a href="">Cliquez ici</a>

                        </span>
                    </form>
                  
                </div>
            </div>
           

            
        </div>
    );
};

export default Register;