import React from 'react'
import './Perfil.css'
import { Form } from 'react-router-dom'
import Form_perfil from '../Forms/Form_perfil'

function Perfil() {
  return (
    <div className='cont-perfil-body'>

        <div className='const-perfil'>

            <div className='forms'>
                <Form_perfil />
            </div>

        </div>

    </div>
  )
}

export default Perfil