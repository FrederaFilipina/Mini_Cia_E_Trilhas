import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { Mycontext } from '../../context/ContextGlobalUser'

function NavBar() {

  const {user} = useContext(Mycontext)


  return (
    <nav className='cont-navBar'> 
        <Link className='link' to={'/'}>Home</Link>
        {user && <Link className='link' to={'/dashboard'} >DashBord</Link>}
        <Link className='link' to={'/eventos'} >Agenda</Link>
        <Link className='link' to={'trilhas'} >Trilhas</Link>
        {!user ? <Link className='link' to={'/login'}>Login</Link>: <Link className='link' to={'/perfil'}>Perfil</Link>}
        {/* {!user && <Link className='link' to={'/cadastro'}>Cadastro</Link>}         */}
        
    </nav>
  )
}

export default NavBar
