import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { GoogleOAuthProvider } from '@react-oauth/google'
import Reg from './Newreg.jsx'
import Ecom from './Ecom.jsx'
import Conn from './Conn.jsx'  

import Det from './Detail.jsx'
import Sell from './Sell.jsx'  
import Card from './Card.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<GoogleOAuthProvider clientId="566246317175-9fg7rfhl2slk4g3pf7s3qj6svdtaq280.apps.googleusercontent.com">
     <App></App>
    </GoogleOAuthProvider>
  },
  {
    path:'/detail/:id',
    element:<Det></Det>
  },
  {
    path:'/Sell',
    element:<Sell></Sell>
  },
  {
    path:'/newreg',
    element:<Reg></Reg>
  },
  {
    path:'/product',
    element:<Conn></Conn>
  },
  {
    path:'/Card',
    element:<Card></Card>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router}/>
    

  </StrictMode>,
)
