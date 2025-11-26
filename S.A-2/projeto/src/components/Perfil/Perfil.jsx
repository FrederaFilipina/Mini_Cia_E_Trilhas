import React from 'react'
import './Perfil.css'
import { Form } from 'react-router-dom'
import Form_perfil from '../Forms/Form_perfil'
import Dropdown from '../DropdownPerfil/Dropdown'
import Form_perfil_nEditavel from '../Forms/Form-perfil-nEditavel'
import Form_perfil_editavel from '../Forms/Form_perfil_editavel'

function Perfil() {
  return (
    <div className='cont-perfil-body'>

        <div className='const-perfil'>

                <Form_perfil />

        </div>

    </div>
  )
}

export default Perfil