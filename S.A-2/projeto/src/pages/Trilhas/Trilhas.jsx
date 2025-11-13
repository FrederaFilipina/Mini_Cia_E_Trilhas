import './Trilhas.css'
import Header from '../../components/Header/Header'
import BttnsReg from '../../components/BttnsReg/BttnsReg'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
<<<<<<< HEAD
=======
import BarraPesq from '../../components/BarraPesq/BarraPesq'




>>>>>>> cfc68f70b7a994c9c53c9d9ce1ee71538acefc47

function Trilhas() {
  const {regTrilhas, setRegiao, modalLogin} = useContext(Mycontext)

  return (
    <div className='Trilhas-container'>

<<<<<<< HEAD
      <div className='Container-header'>
        {modalLogin && <Login/>}
        <Header />
      </div>

      <div className='Container-pag'>

        <div className='Pag-filtro'>
=======
      <Header />
      
      <div className='Pag-filtro'>
>>>>>>> cfc68f70b7a994c9c53c9d9ce1ee71538acefc47

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
