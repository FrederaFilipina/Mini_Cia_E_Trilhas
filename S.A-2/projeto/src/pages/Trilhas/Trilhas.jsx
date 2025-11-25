import './Trilhas.css'
import Header from '../../components/Header/Header'
import { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import Login from '../../components/Login/Login'
import MenuPesq from '../../components/MenuPesq/MenuPesq'
import CardsTrilhaOff from '../../components/Cards/CardsTrilhaOff'
import buscarCardsTrilhaOff from '../../server/buscarInformacao/buscarCardsTrilhaOff'




function Trilhas() {
  
  const [TrilhasBD, setTrilhasBD] = useState([])

  async function pesquisaAPI(params) {

    const infsTrilhas= await buscarCardsTrilhaOff()

    if (infsTrilhas.ok) {

      setTrilhasBD (infsTrilhas.resultado)
      return
    }

    console.log(`Erro ao fazer a busca ${infsTrilhas}`);
    
  }

  useEffect(()=> {pesquisaAPI()}, [])
  const { modalLogin, setModalLogin, regTrilhas, setRegiao } = useContext(Mycontext)


  return (
    <div className='Trilhas-areaPg'>

      <div>
      <Header/>
      {modalLogin && <Login/>}
      </div>


      <div className='AreaPg-contFiltros'> <MenuPesq /> </div>

      <div className='Pag-cards'>
        {console.log(TrilhasBD)}
        
        {TrilhasBD.length > 0 && TrilhasBD.map(trilha =>(
          <CardsTrilhaOff
          nome={trilha["nomeTrilha"]}
          dis={trilha["distância"]}
          tmp={trilha["tempo"]}
          dif={trilha["dificuldade"]}
          />
        )
      )}
        
      </div>

    </div>
  )
}

export default Trilhas
