//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage

const infsListaTrilhas = [
    {
        trilha: 'TrilhaN1', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        trilha: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        trilha: 'TrilhaC1', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        trilha: 'TrilhaC2', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        trilha: 'TrilhaL1', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        trilha: 'TrilhaL2', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        trilha: 'TrilhaS1', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        trilha: 'TrilhaS2', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
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
    return false
}
function limparTrilhas() {
    let limparListTrilhas = document.querySelector('.cont-infoListTrilhas')
    limparListTrilhas.innerHTML = ``
}
function limparDadosTrilha() {
    let limparDdsTrilha = document.querySelector('.cont-infoDdsTrilha')
    limparDdsTrilha.innerHTML = ``
}
function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()
    limparDadosTrilha()
    let trilhasReg = RegTrilha
    let nomeRegiao
    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    document.querySelector('.cont-infoListTrilhas').innerHTML =
        `<p>Essas são as trilhas da região: ${trilhasReg}</p>
        <br>
        <ol id="ListagemTrilhas"></ol>`
    let nomesTrilhas
    nomesTrilhas = document.getElementById('ListagemTrilhas')
    for (const element of nomeRegiao) {
        nomesTrilhas.innerHTML +=
            `<p><li><button onclick="mostrarInfTrilha('${element.trilha}')" id="BttnNomeTrilhas">
            <p>${element.trilha}</p</button></li><p>`
    }
}
function mostrarInfTrilha(nomeTrilha) {
    limparDadosTrilha()
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if (logInOut()) {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
        document.querySelector('.cont-infoDdsTrilha').innerHTML =
            `<p> Trilha: ${dadosTrilha.trilha}</p>
            <br>
            <p>Infs Completas</p>`
    } else {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
        document.querySelector('.cont-infoDdsTrilha').innerHTML =
            `<p> Trilha: ${dadosTrilha.trilha}</p>
            <br>
            <p>Infs Básicas</p>
            <button onclick="LOGIN">Login</button>`
    }
}

//Área reservada para receber as instruções do funcionamento das Trilhas