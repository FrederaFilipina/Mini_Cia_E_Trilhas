import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import Login from '../../components/Login/Login'
import { Mycontext } from '../../context/ContextGlobalUser'
import Perfil from '../../components/Perfil/Perfil'



function Home() {
  const navigate = useNavigate()
  const {modalLogin, setModalLogin, modalPerfil, setModalPerfi, meusDados} = React.useContext(Mycontext)

// function button_explore() {
//   navigate('/trilhas')
// }

  return (
    <div className='cont-home'>
      <Header transparent/>
      {modalLogin && <Login/>}
      {meusDados && <Perfil/>}

      <div className='cont-info-home'>

        <div className='cont-paragraphs'>
          <h1>Aventura te espera: Descruba todas
            as
            <br />trilhas de Florianopólis</h1>
          <p>
            Mapas, dicas, eventos e a comunidade
            <br />
            que te move.
          </p>

        </div>
        <div className='cont-button-explore'>

          <button className='button-explore' onClick={() => navigate('/trilhas')}>Explorar agora</button>

        </div>
      </div>

    </div>
  )
}

export default Home
