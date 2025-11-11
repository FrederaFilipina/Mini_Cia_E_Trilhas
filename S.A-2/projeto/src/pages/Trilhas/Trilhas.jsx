import './Trilhas.css'
import Header from '../../components/Header/Header'
import BttnsReg from '../../components/BttnsReg/BttnsReg'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'





function Trilhas() {
  const {regTrilhas, setRegiao} = useContext(Mycontext)


  return (
    <div className='Trilhas-container'>

      <div className='Container-header'>
        <Header />
      </div>

      <div className='Container-pag'>

        <div className='Pag-filtro'>

          <div className='Filtro-pesq'>

            <div className='Pesq-barra'></div>
            <div className='Pesq-filtro'></div>

          </div>

          <div className='Filtro-reg'>
            <BttnsReg funcao={()=>setRegiao('Regiões')} nomeReg={"Todas as TRILHAS"} img={'Imgs/Geral.png'}/>
            <BttnsReg funcao={()=>setRegiao('Norte')} nomeReg={"Reg. Norte"} img={'Imgs/Norte.png'}/>
            <BttnsReg funcao={()=>setRegiao('Leste')} nomeReg={"Reg. Leste"} img={'Imgs/Leste.png'}/>
            <BttnsReg funcao={()=>setRegiao('Central')} nomeReg={"Reg. Central"} img={'Imgs/Central.png'}/>
            <BttnsReg funcao={()=>setRegiao('Sul')} nomeReg={"Reg. Sul"} img={'Imgs/Sul.png'}/>
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
