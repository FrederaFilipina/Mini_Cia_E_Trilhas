import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'

function Header({transparent=false}) {
  return (
    <div className='cont-header'>
      <NavBar transparent={transparent}/> 
    </div>
  )
}

export default Header
