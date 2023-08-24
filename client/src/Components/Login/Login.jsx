import { useEffect, useState } from 'react';
import './Login.scss'
import video from '../../LoginAssets/video2.mp4'
import logo from'../../LoginAssets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import '../../App.scss'
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import './Login.scss'


const Login = () => {
    const { setUser } = useUser();
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigateTo = useNavigate()

    

    const LoginUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/login', {
                name: name,
                password: password
            });

            setMessage(response.data.message);
            if (response.data.user) {
                setUser(response.data.user); // Stocke les données de l'utilisateur dans le contexte
            }

        } catch (error) {
            setMessage('');
            
            
            
        }
        if (message === 'Connexion réussie'){
                navigateTo('/home')
            
            }else{
                navigateTo('/')
            }
        
        
        
        
        
    };

    useEffect(() => {
        if (message === 'Échec de la connexion') {
            setTimeout(() => {
                setMessage('');
            }, 3000); // Affiche le message d'erreur pendant 3 secondes
        }
    }, [message]);


    return (
        <div className='loginPage flex '>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>
                    <div className="textDiv">
                        <h2 className='title'>Connecte toi et Achète des produits agricoles de qualité</h2>
                        <p>Prend gout aux produits agricoles auux prix homologués</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Vous n avez pas de compte? </span>
                        <Link to={'/register'}>
                        <button className="btn">Inscrivez-vous</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logo de Agrobloc" className='imp' />
                        <h3>Bienvenue</h3>
                    </div>
                    <form action="" className='form grid' onSubmit={LoginUser}>
                        <span >{message} </span>
                        <div className="inputDiv">
                            <label htmlFor="username">Nom utilisateur</label> 
                            <div className="input flex">
                            <FaUserShield className ='icon'/>
                                <input type="text" id = 'username' placeholder='Entrer votre nom' onChange={(event)=>{
                                    setUsername(event.target.value)
                                }} />
                            </div>
                        </div><br />
                        <div className="inputDiv">
                            <label htmlFor="password">Mot de passe</label>
                            <div className="input flex">
                            <BsFillShieldLockFill className ='icon'/>
                                <input type="password" id = 'password' placeholder='Entrer votre mot de passe' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div><br /><br />
                        
                        <button type='submit' className='btn flex' onClick={LoginUser}>
                            <span>Connexion</span>
                            <AiOutlineSwapRight className='icon'/>

                        </button><br />
                        <span className='forgotPassword'>
                            Avez vous oublié votre mot de passe? <a href="">Cliquez ici</a>

                        </span>
                    </form>
                  
                </div>
            </div>
           

            
        </div>
    );
};

export default Login;