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
import { UserProvider } from './contexts/UserContext'
import EnCours from './pages/commandesEnCours/enCours'
import { ProductProvider } from './contexts/ProductContext'; // Importez le fournisseur de contexte du produit
import { VendorProvider } from './contexts/VendorContext'
import { CartProvider } from './contexts/CartContext'
import { ShopProvider } from './contexts/shopContext'
import HisEnCours from './pages/historique/hisEnCours'
import Validé from './pages/historique/Validé'
import Livre from './pages/historique/livre'
import DebutPaiement from './pages/debutPaiement/DebutPaiement'




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
    path: '/product/:productId/sellers',
    element: <div><Vendeurs/></div>
  },
  {
    path: '/add-to-cart/:vendorId',
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
  {
    path: '/hisEnCours',
    element: <div><HisEnCours/></div>
  },
  {
    path: '/valide',
    element: <div><Validé/></div>
  },

  {
    path: '/livre',
    element: <div><Livre/></div>
  },
  {
    path: '/commandes/:shopId',
    element: <div><EnCours/></div>
  },
  {
    path: '/debutpaiement',
    element: <div><DebutPaiement/></div>
  },


])



function App() {
  

  return (
    <div>
      <UserProvider>
        <ProductProvider>
          <VendorProvider>
            <CartProvider>
            <ShopProvider>
            {
      
      <RouterProvider router={router}/>}
            </ShopProvider>

    
            </CartProvider>

    </VendorProvider>
        </ProductProvider>

      </UserProvider>
      
    </div>
  
   
  )
}

export default App
