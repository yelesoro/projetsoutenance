import { useEffect, useState } from 'react';
import './Login.scss'
import video from '../../LoginAssets/video2.mp4'
import logo from'../../LoginAssets/logo.png'
import { Link, useNavigate, } from 'react-router-dom';
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import '../../App.scss'
import axios from 'axios';


const Login = () => {

    const [loginUsername, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()
    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setstatusHolder] = useState('message')

    const LoginUser = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/login', {
            LoginUserName: loginUsername,
            LoginPassword: loginPassword
        })
.then((response)=>{
    console.log()   

    if (response.data.message || loginUsername=='' || loginPassword ==''){
        navigateTo('/')
        setLoginStatus('Le nom ou le mot de passe ne correspond pas')
    }else{
        navigateTo('/home')
    }
})
    }

    useEffect(()=>{
        if(loginStatus!==''){
            setstatusHolder('showMessage')
            setTimeout(()=>{
                setstatusHolder('message')


            }, 4000);
        }
    }, [loginStatus])

    const onSubmit = ()=>{
        setLoginUserName('')
        setLoginPassword('')
    }

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
                        <img src={logo} alt="logo de Agrobloc" />
                        <h3>Bienvenue</h3>
                    </div>
                    <form action="" className='form grid' onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus} </span>
                        <div className="inputDiv">
                            <label htmlFor="username">Nom utilisateur</label> 
                            <div className="input flex">
                            <FaUserShield className ='icon'/>
                                <input type="text" id = 'username' placeholder='Entrer votre nom' onChange={(event)=>{
                                    setLoginUserName(event.target.value)
                                }} />
                            </div>
                        </div><br />
                        <div className="inputDiv">
                            <label htmlFor="password">Mot de passe</label>
                            <div className="input flex">
                            <BsFillShieldLockFill className ='icon'/>
                                <input type="password" id = 'password' placeholder='Entrer votre mot de passe' onChange={(event)=>{
                                    setLoginPassword(event.target.value)
                                }} />
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