import './MenuPesq.css'
import BttnFln from '../BttnsReg/BttnFln'
import BttnsReg from '../BttnsReg/BttnRegs'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'


function MenuPesq() {
    const { regTrilhas, setRegiao } = useContext(Mycontext)

    return (
        <div className='MenuPesq'>
            <div className='Esq'></div>
            <div className='Dir'>
                <div className='Dir-TdsReg'>
                    <BttnFln fun={() => setRegiao('Regiões')} fln={"Todas"} map={'Imgs/Geral.png'} />
                </div>
                <div className='Dir-CdReg'>
                    <BttnsReg funcao={() => setRegiao('Central')} nomeReg={"Central"} img1={'Imgs/Central.png'} img2={'Imgs/Central.png'}/>
                    <BttnsReg funcao={() => setRegiao('Norte')} nomeReg={"Norte"} img1={'Imgs/Norte.png'} img2={'Imgs/Norte.png'}/>
                    <BttnsReg funcao={() => setRegiao('Leste')} nomeReg={"Leste"} img1={'Imgs/Leste.png'} img2={'Imgs/Leste.png'}/>
                    <BttnsReg funcao={() => setRegiao('Sul')} nomeReg={"Sul"} img1={'Imgs/Sul.png'} img2={'Imgs/Sul.png'} />
                </div>
            </div>
        </div>
    )
}

export default MenuPesq