//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage

const infsListaTrilhas = [
    {
        nome: 'TrilhaN1', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
        {
        nome: 'TrilhaN1', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
        {
        nome: 'TrilhaN1', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaC1', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaC2', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaL1', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaL2', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaS1', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaS2', pPartida: ``, pChegada: ``,
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
    return true
}
function limparTrilhas() {
    let limparListTrilhas = document.querySelector('.cont-list-dados-trilhas')
    limparListTrilhas.innerHTML = ``
}

function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()

    let trilhasReg = RegTrilha
    let nomeRegiao
    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    document.querySelector('.cont-info-Reg').innerHTML =
    `<p>Essas são as trilhas da região: ${trilhasReg}</p>`
    
    let nomesTrilhas
    nomesTrilhas = document.querySelector('.cont-list-dados-trilhas')
    
    if(logInOut()){
        for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="bttnNomeTrilhas">
                <p>
                    ${trilha.nome}, LOG IN
                    <br>Km: ${trilha.distancia}
                    <br>Inicio: ${trilha.pPartida}
                    <br>Chegada: ${trilha.pChegada}
                </p>
            </div>`
        }
    } else {
        for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="bttnNomeTrilhas">
                <p>
                    ${trilha.nome}, LOG OUT
                    <br>Km: ${trilha.distancia}
                    <br>Inicio: ${trilha.pPartida}
                    <br>Chegada: ${trilha.pChegada}
                </p>
            </div>`
        }
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