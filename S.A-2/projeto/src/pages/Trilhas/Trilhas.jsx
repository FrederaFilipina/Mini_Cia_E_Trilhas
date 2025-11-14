import './Trilhas.css'
import Header from '../../components/Header/Header'
import BttnsReg from '../../components/BttnsReg/BttnsReg'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import Login from '../../components/Login/Login'


function Trilhas() {
  const {modalLogin, setModalLogin, regTrilhas, setRegiao} = useContext(Mycontext)


  return (
    <div className='Trilhas-areaPg'>
     
      <Header/> {modalLogin && <Login/>}

      
      <div className='AreaPg-contFiltros'>

        <div className='Cont-filtros'>
          <div className='Filtros-pesqFiltro'></div>
          <div className='Filtros-regioes'>
            <div className='Regioes-todas'>
              <BttnsReg funcao={()=>setRegiao('Regiões')} nomeReg={"Todas"} img={'Imgs/Geral.png'}/>
            </div>
            <div className='Regioes-bttns'>
            <BttnsReg funcao={()=>setRegiao('Central')} nomeReg={"Central"} img={'Imgs/Central.png'}/>
            <BttnsReg funcao={()=>setRegiao('Norte')} nomeReg={"Norte"} img={'Imgs/Norte.png'}/>
            <BttnsReg funcao={()=>setRegiao('Leste')} nomeReg={"Leste"} img={'Imgs/Leste.png'}/>
            <BttnsReg funcao={()=>setRegiao('Sul')} nomeReg={"Sul"} img={'Imgs/Sul.png'}/>
            </div>
          </div>

        </div>

        </div>

        <div className='Pag-cards'>
          <h1>{regTrilhas}</h1>
        </div>
      
      

      

    </div>
  )
}

export default Trilhas
