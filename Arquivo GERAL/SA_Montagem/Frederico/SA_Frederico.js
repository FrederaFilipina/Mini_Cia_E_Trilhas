//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage

const infsListaTrilhas = [
    {
        nome: 'Caminho dos Naufragados', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: `Irregular`, elevacao: `15m`,
        nvlTSite: `5`, nvlTUsuario: [4],
        obs: ``,
    },

    {
        nome: 'Lagoinha do Leste (Praia)', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
        {
        nome: 'Lagoinha do Leste (Morro da Coroa)', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'Piscinas Naturais da Barra da Lagoa', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
        {
        nome: 'TrilhaN5', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN6', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN7', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN8', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaC1', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaC2', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaL1', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaL2', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaS1', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaS2', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
]
localStorage.setItem('ListagemTrilhas', JSON.stringify(infsListaTrilhas))

//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage



//Área reservada para receber as instruções do funcionamento das Trilhas

function logInOut() {
    /*let usuario = localStorage.getItem("LogIN")
    if(usuario != undefined){
        return true
    }
    else {
        return false
    }*/
    return true
}
function limparTrilhas() {
    let limparListTrilhas = document.querySelector('.cont-ListasTrilhas')
    limparListTrilhas.innerHTML = ``
}
function limparDadosTrilhas() {
    let limparDadosTrilhas = document.querySelector('.cont-DadosTrilha')
    limparDadosTrilhas.innerHTML = ``
}
function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()
    limparDadosTrilhas()

    let trilhasReg = RegTrilha
    let nomeRegiao
    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    document.querySelector('.cont-Reg').innerHTML =
    `<p>Essas são as trilhas da região: ${trilhasReg}</p>`
    
    let nomesTrilhas
    nomesTrilhas =  document.querySelector('.cont-ListasTrilhas')
    
    if(logInOut()){
        for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="divsBttnTrilha">
                <p>
                    ${trilha.nome}
                </p>
            </div>`
        }
    } else {
        for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="divsBttnTrilha">
                <p>
                    LOG OUT ${trilha.nome},
                </p>
            </div>`
        }
    }

    
}
function mostrarInfTrilha(nomeTrilha) {
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if(logInOut()){
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha').innerHTML =
        `<span>Trilha: ${dadosTrilha.nome}</span>
        <Br>
        <img src="map-pin.svg" class='iconsDadosTrilha'>
        <span>${dadosTrilha.pPartida}</span>
        <Br>
        <img src="map-pin-line.svg" class='iconsDadosTrilha'>
        <span>${dadosTrilha.pChegada}</span>
        <Br>
        <span>Informações:</span>
        <br>
        <span>Dificuldade: 
        Def. pelo site: ${dadosTrilha.nvlTSite}</span>
        Def. pelos usuarios: ${dadosTrilha.nvlTUsuario}</span>
        <span>Infomações: </span>
        <span>${dadosTrilha.distancia} / ${dadosTrilha.tempo}</span> 
        <span>Relevo: ${dadosTrilha.relevo}</span> 
        <span>Elevação: ${dadosTrilha.elevacao}</span> 
        <span>Obs.: ${dadosTrilha.obs}</span>        
        `

    } else{
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha').innerHTML =
        `<p>Trilha: ${dadosTrilha.nome}</p>
        <p>Ínicio: ${dadosTrilha.pPartida}</p>
        <p>Fim: ${dadosTrilha.pChegada}</p>
        <p>Dificuldade:</p>
        <p>Def. pelo site: ${dadosTrilha.nvlTSite}</p>
        <p>Def. pelos usuarios: ${dadosTrilha.nvlTUsuario}</p>
        <p>Infomações: </p>
        <p>${dadosTrilha.distancia} / ${dadosTrilha.tempo}</p>        
        `

    }


    // if (logInOut()) {
        
    //     dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
    //     document.querySelector('.cont-DadosTrilha').innerHTML =
    //         `<p> Trilha: ${dadosTrilha.trilha}</p>
    //         <br>
    //         <p>Infs Completas</p>`
    // } else {
    //     dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
    //     document.querySelector('.cont-DadosTrilha').innerHTML =
    //         `<p> Trilha: ${dadosTrilha.trilha}</p>
    //         <br>
    //         <p>Infs Básicas</p>
    //         <button onclick="LOGIN">Login</button>`
    // }
}

//Área reservada para receber as instruções do funcionamento das Trilhas