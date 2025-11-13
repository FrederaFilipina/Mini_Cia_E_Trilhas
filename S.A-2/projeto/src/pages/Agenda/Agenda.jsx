import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import { Mycontext } from '../../context/ContextGlobalUser'
import CardsEvento from '../../components/Cards/CardsEvento'
import buscarCardsAgendaOff from '../../server/buscarCardsAgendaOff'
import './Agenda.css'

function Eventos() {

  const [agenda, setAgenda] = useState ([])
  async function pesquisaAPI(params) {
    const dados = await buscarCardsAgendaOff()
    setAgenda (dados.result)
    console.log(dados)
  }

  useEffect(()=> {pesquisaAPI()}, [])
  const {modalLogin, setModalLogin} = React.useContext(Mycontext)

  
  return (
    <div className='Agenda-cont'>
      <div>
      <Header/>
      {modalLogin && <Login/>}
      </div>


      <div><p> Área destinada ao Menu de Filtros</p></div>

      <div className='Cards-Eventos'>
        {/* {console.log(agenda)} */}
        {agenda.length > 0 &&
        agenda.map(evento => (<CardsEvento
          nomeTrilha={evento["Nome da Trilha"]}
          data={evento["Data"]}
          horario={evento["Horário"]}
          vagas={evento["Vagas Disp."]}
          
          />))}
    
      </div>
    </div>
  )
}

export default Eventos