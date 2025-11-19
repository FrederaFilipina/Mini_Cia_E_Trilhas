import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import router from './router/router.jsx'
import { ContextGlobalUser } from './context/ContextGlobalUser.jsx'





createRoot(document.getElementById('root')).render(
  <ContextGlobalUser>
    <RouterProvider router={router}>

    </RouterProvider>
    
  </ContextGlobalUser>,
)
