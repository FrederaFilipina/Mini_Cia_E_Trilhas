import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {


  return (
    <nav className='cont-navBar'> 
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/cadastro'}>Cadastro</Link>
        <Link className='link' to={'/login'}>Login</Link>
        <Link className='link' to={'/eventos'} >Eventos</Link>
        <Link className='link' to={'/avaliação'} >Avaliação</Link>
        <Link className='link' to={'/dashboard'} >DashBord</Link>
        <Link className='link' to={'trilhas'} >Trilhas</Link>
    </nav>
  )
}

export default NavBar
