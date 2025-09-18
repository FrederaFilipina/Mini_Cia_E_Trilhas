import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Cadastro from '../pages/Cadastro/Cadastro'
import Login from '../pages/Login/Login'
import Eventos from '../pages/Eventos/Eventos'
import Avaliacao from '../pages/Avaliacao/Avaliacao'
import Dashboard from '../pages/Dashboard/Dashboard'
import Trilhas from '../pages/Trilhas/Trilhas'

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/cadastro', element: <Cadastro/>},
    {path: '/login' , element : <Login/>},
    {path: '/eventos', element: <Eventos/>},
    {path: '/avaliação', element: <Avaliacao/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/trilhas', element: <Trilhas/>}
])

export default router