import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Produits from './pages/produit/Produits'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Vendeurs from './pages/vendeurs/Vendeurs'
import PriceDefinition from './pages/definitionprice/PriceDefinition'
import Panier from './pages/panier/Panier'
import Historique from './pages/historique/Historique'



const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
 
  {
    path: '/home',
    element: <div><Home/></div>
  },

  {
    path: '/produits',
    element: <div><Produits/></div>
  },
  {
    path: '/vendeurs',
    element: <div><Vendeurs/></div>
  },
  {
    path: '/priceDefinition',
    element: <div><PriceDefinition/></div>
  },
  {
    path: '/panier',
    element: <div><Panier/></div>
  },
  {
    path: '/historique',
    element: <div><Historique/></div>
  },
  


])



function App() {
  

  return (
    <div>
      {
      
      <RouterProvider router={router}/>

    }
      
    </div>
  
   
  )
}

export default App
