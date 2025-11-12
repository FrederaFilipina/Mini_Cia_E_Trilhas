import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Eventos from '../pages/Agenda/Agenda'
import Dashboard from '../pages/Dashboard/Dashboard'
import Trilhas from '../pages/Trilhas/Trilhas'
import Perfil from '../pages/Perfil/Perfil'

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/eventos', element: <Eventos/>},
    // {path: '/avaliação', element: <Avaliacao/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/trilhas', element: <Trilhas/>},
    {path: '/perfil', element: <Perfil/>},
])

export default router