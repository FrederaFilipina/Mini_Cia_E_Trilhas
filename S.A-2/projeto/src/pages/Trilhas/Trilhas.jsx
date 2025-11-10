import './Trilhas.css'
import Header from '../../components/Header/Header'


function Trilhas() {
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
            
          </div>

        </div>

        <div className='Pag-cards'></div>
      
      </div>

      
    </div>
  )
}

export default Trilhas
