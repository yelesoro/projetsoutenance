import Header from "../../Components/header/Header.jsx";
import Body from "../../Components/Homebody/body.jsx";
import { useUser } from '../../contexts/UserContext.jsx';


const Home = () => {
    const { user } = useUser();

        return (
            <div>
                <Header/><br /><br /><br /><br /><br /><br /><br /><br />
                <center>
                    <h2>Bienvenue acheteur <span>{user.name}</span></h2>

                </center>
                <Body/>
            </div>
        );
  
}

export default Home;