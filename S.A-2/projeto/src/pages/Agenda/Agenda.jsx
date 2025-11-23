import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import { Mycontext } from '../../context/ContextGlobalUser'
import CardsEvento from '../../components/Cards/CardsEvento'
import buscarCardsAgendaOff from '../../server/buscarInformacao/buscarCardsAgendaOff'
import './Agenda.css'
import MenuPesq from '../../components/MenuPesq/MenuPesq'

function Eventos() {

  const [agenda, setAgenda] = useState ([])

  async function pesquisaAPI(params) {
    
    const dados = await buscarCardsAgendaOff()

    if (dados.ok) {
      
      setAgenda (dados.resultado)
      return
    }

    console.log(dados);
    
  }


  useEffect(()=> {pesquisaAPI()}, [])
  const {modalLogin, setModalLogin} = React.useContext(Mycontext)

  
  return (
    <div className='Agenda-cont'>
      <div>
      <Header/>
      {modalLogin && <Login/>}
      </div>


      <div className='Cont-MenuPesq'> <MenuPesq /> </div>

      <div className='Cards-Eventos'>
        {/* {console.log(agenda)} */}
        
        {agenda.length > 0 &&
        agenda.map(evento => (
        <CardsEvento
          nomeTrilha={evento["nomeTrilha"]}
          data={new Date(evento["data"]).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
          horario={evento["horário"]}
          vagas={evento["vagasDisp"]} />
          ))}
    
      </div>
    </div>
  )
}

export default Eventos