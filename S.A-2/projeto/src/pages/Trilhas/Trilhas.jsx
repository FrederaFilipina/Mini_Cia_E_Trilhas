import './Trilhas.css'
import Header from '../../components/Header/Header'
import BttnsReg from '../../components/BttnsReg/BttnsReg'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

function Trilhas() {
  const {regTrilhas, setRegiao, modalLogin} = useContext(Mycontext)

  return (
    <div className='Trilhas-container'>

      <div className='Container-header'>
        {modalLogin && <Login/>}
        <Header />
      </div>

      <div className='Container-pag'>

        <div className='Pag-filtro'>

          <div className='Filtro-pesq'>

            <div className='Pesq-barra'>
              <div className='Barra-barra'></div>
              <div className='Barra-bttn'></div>
              
            </div>
            <div className='Pesq-filtro'></div>

          </div>

          <div className='Filtro-reg'>
            <BttnsReg funcao={()=>setRegiao('Regiões')} nomeReg={"Todas"} img={'Imgs/Geral.png'}/>
            <BttnsReg funcao={()=>setRegiao('Norte')} nomeReg={"Norte"} img={'Imgs/Norte.png'}/>
            <BttnsReg funcao={()=>setRegiao('Leste')} nomeReg={"Leste"} img={'Imgs/Leste.png'}/>
            <BttnsReg funcao={()=>setRegiao('Central')} nomeReg={"Central"} img={'Imgs/Central.png'}/>
            <BttnsReg funcao={()=>setRegiao('Sul')} nomeReg={"Sul"} img={'Imgs/Sul.png'}/>
          </div>

        </div>

        <div className='Pag-cards'>
          <h1>{regTrilhas}</h1>
        </div>
          
    </div>
    </div>
  )
}

export default Trilhas
