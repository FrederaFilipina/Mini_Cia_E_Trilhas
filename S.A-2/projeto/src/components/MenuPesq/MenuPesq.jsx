import './MenuPesq.css'
import BttnFln from '../BttnsReg/BttnFln'
import BttnsReg from '../BttnsReg/BttnRegs'
import { useContext, useState } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import BarraPesq from '../BarraPesq/BarraPesq'
import { GiPathDistance } from "react-icons/gi"
import { FaArrowDownShortWide } from "react-icons/fa6"
import { FaArrowDownWideShort } from "react-icons/fa6"
import { TbFilter } from "react-icons/tb"
import { BsSmartwatch } from "react-icons/bs"


function MenuPesq() {
    const {regTrilhas, setRegiao} = useContext(Mycontext);
    const [fltrDT, setfltrDT] = useState('')
    const [fltrMN, setfltrMN] = useState('')

    function FiltrarDT(){       
        if('True'){
            setfltrDT(
                <>
                    <button onClick={FiltrarMN} className='Inf-meio-FltrDT' > <GiPathDistance size={25}/>Distância</button>
                    <button onClick={FiltrarMN} className='Inf-meio-FltrDT'> <BsSmartwatch size={25}/>Tempo</button>
                </>            
            )}}

    function FiltrarMN(){
        if('True'){
            setfltrMN(
                <>
                    <button className='Inf-dir-FltrMN'> <FaArrowDownWideShort size={15}/>Maior p/ menor</button>
                    <button className='Inf-dir-FltrMN'> Menor p/ maior <FaArrowDownShortWide size={15}/></button>
                </>
            )}}

    return (
    <div className='MenuPesq-cont'>

        <div className='Cont-esq'>

            <div className='Esq-sup'>

                <div className='Sup-esq'>
                    <BarraPesq />
                </div>

                <div className='Sup-dir'>
                    <button className='Sup-dir-BttnPesq'>Pesquisar</button>
                </div>

            </div>

            <div className='Esq-inf'>

                <div className='Inf-esq'>
                    <button onClick={FiltrarDT} className='Inf-esq-BttnFiltro'> <TbFilter size={45}/></button>
                </div>

                <div className='Inf-meio'> {fltrDT} </div>

                <div className='Inf-dir'> {fltrMN} </div>

            </div>


        </div>


        <div className='Cont-dir'>

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