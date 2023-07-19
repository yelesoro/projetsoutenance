import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
  }

])



function App() {

  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
   
  )
}

export default App
