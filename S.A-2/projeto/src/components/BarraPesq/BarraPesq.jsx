import './BarraPesq.css'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

function BarraPesq (){
    const {barraPesq, setBarraPesq} = useContext(Mycontext)

    return(
        <input className='BarraPesq'
        type='text'
        value={barraPesq}
        onChange={(event)=> setBarraPesq(event.target.value)}
        />
    )

}

export default BarraPesq