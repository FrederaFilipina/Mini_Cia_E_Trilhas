import './Trilhas.css'
import Header from '../../components/Header/Header'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import Login from '../../components/Login/Login'
import MenuPesq from '../../components/MenuPesq/MenuPesq'


function Trilhas() {
  const {modalLogin, setModalLogin, regTrilhas, setRegiao} = useContext(Mycontext)


  return (
    <div className='Trilhas-areaPg'>
     
      <Header/> {modalLogin && <Login/>}

      
      <div className='AreaPg-contFiltros'>
        <MenuPesq />
      </div>

        <div className='Pag-cards'>
          <h1>{regTrilhas}</h1>
        </div>
      
      

      

    </div>
  )
}

export default Trilhas
