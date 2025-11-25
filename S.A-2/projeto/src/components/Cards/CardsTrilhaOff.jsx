
import { useContext } from 'react'
import './CardsEvento.css'
import { Mycontext } from '../../context/ContextGlobalUser'

function CardsTrilhaOff(props) {

    const {user,setUser, setModalLogin, setModalPerfil,modalPerfil} = useContext(Mycontext)

    function abrirLogin(){
        if ('true'){
            alert("Ir para a parte do login")
            
        }
    }
    return (
        <div className='Cont-CardsTrilhasOff'>
            <div className='CardsTrilhasOff'>
                <p>{props.nome}</p>
                <p>Dist.: {props.dis}</p>
                <p>Tempo: {props.tmp}</p>
                <p>Dificuldade: {props.dif}</p>

            </div>

            <div className='Login-bttn'>
                {!user ? (<button className='Bttn' onClick={()=> setModalLogin(true)}> <img className='Bttn-img' src="Imgs/Central.png" alt="icone" /> </button>) : ( <Dropdown perfil={modalPerfil} />)}
            </div>

        </div>
    )
}

export default CardsTrilhaOff