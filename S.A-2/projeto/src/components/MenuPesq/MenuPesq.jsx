import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import BttnsReg from '../BttnsReg/BttnsReg'
import './MenuPesq.css'


function MenuPesq (){
    const {regTrilhas, setRegiao} = useContext(Mycontext)

    return (
        <div className='MenuPesq'>
            <div className='Esq'></div>
            <div className='Dir'>
                <div className='Dir-TdsReg'>
                    <BttnsReg funcao={()=>setRegiao('Regiões')} nomeReg={"Todas"} img={'Imgs/Geral.png'}/>
                </div>
                <div className='Dir-CdReg'>
                    <BttnsReg funcao={()=>setRegiao('Central')} nomeReg={"Central"} img={'Imgs/Central.png'}/>
                    <BttnsReg funcao={()=>setRegiao('Norte')} nomeReg={"Norte"} img={'Imgs/Norte.png'}/>
                    <BttnsReg funcao={()=>setRegiao('Leste')} nomeReg={"Leste"} img={'Imgs/Leste.png'}/>
                    <BttnsReg funcao={()=>setRegiao('Sul')} nomeReg={"Sul"} img={'Imgs/Sul.png'}/>
                </div>
            </div>
        </div>
    )
}

export default MenuPesq

//Como faço para quando eu clicar em um dos botões na Pág Agenda, ele não alterar na Pág Trilhas?