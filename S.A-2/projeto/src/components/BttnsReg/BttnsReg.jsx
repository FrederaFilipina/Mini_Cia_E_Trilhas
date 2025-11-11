import './BttnsReg.css'

function BttnsReg (props){
    return(
        <button onClick={props.funcao} className='BttnsRegs'>
            <img className='Imgs' src={props.img}></img>
            <p>{props.nomeReg}</p>            
        </button>
        
    )
}

export default BttnsReg