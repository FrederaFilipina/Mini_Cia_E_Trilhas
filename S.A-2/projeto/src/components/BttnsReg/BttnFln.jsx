import './Bttns.css'

function BttnFln (props){
    return(
        <button onClick={props.fun} className='BttnsRegs'>
            <div className='RegsImg'>
                <img className='Imgs' src={props.map}></img>
            </div>
            <div  className='RegsNome'>
                <p>{props.fln}</p>
            </div>
        </button>
    )
}
export default BttnFln