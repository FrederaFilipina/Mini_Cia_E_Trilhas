import './Bttns.css'

function BttnsReg (props){

    return(
        <button onClick={props.funcao} className='BttnsRegs'>
            <div className='RegsImg'>
                <img className='Imgs' src={props.img1}></img>
                <img className='Imgs' src={props.img2}></img>
            </div>
            <div  className='RegsNome'>
                <p>{props.nomeReg}</p>
            </div>
        </button>
        
    )
}

export default BttnsReg