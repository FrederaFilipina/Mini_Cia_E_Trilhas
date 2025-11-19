import './MenuPesq.css'
import BttnFln from '../BttnsReg/BttnFln'
import BttnsReg from '../BttnsReg/BttnRegs'
import { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import BarraPesq from '../BarraPesq/BarraPesq'


function MenuPesq() {
    const {regTrilhas, setRegiao} = useContext(Mycontext)

    return (
        <div className='MenuPesq'>
            <div className='Esq'>
                <div className='Esq-BarraPesq'>
                    <BarraPesq />
                    <div className='BarraPesq-Bttn'>
                        <button className='Bttn-pesq'>Pesquisar</button>
                        </div>
                </div>
                <div className='Esq-Filtro'>
                    <button className='Bttn-filtro'> Filtro </button>
                    <div className='filtros'></div>
                </div>
            </div>

            <div className='Dir'>

                <div className='Dir-CdReg'>
                    <BttnsReg funcao={() => setRegiao('Central')} nomeReg={"Central"} img={'Imgs/Central.png'}/>
                    <BttnsReg funcao={() => setRegiao('Norte')} nomeReg={"Norte"} img={'Imgs/Norte.png'}/>
                    <BttnsReg funcao={() => setRegiao('Leste')} nomeReg={"Leste"} img={'Imgs/Leste.png'}/>
                    <BttnsReg funcao={() => setRegiao('Sul')} nomeReg={"Sul"} img={'Imgs/Sul.png'}/>
                </div>

                <div className='Dir-TdsReg'>
                    <BttnFln fun={() => setRegiao('Regiões')} fln={"Todas"} map={'Imgs/Geral.png'} />
                </div>
            </div>
        </div>
    )
}

export default MenuPesq