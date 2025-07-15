//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage

const infsListaTrilhas = [
    {
        nome: 'Caminho dos Naufragados', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: `Irregular`, elevacao: `15m`,
        nvlTSite: `5`, nvlTUsuario: [4],
        img: `<img src="image.svg">`,
    },

    {
        nome: 'Lagoinha do Leste (Praia)', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="IMG-20180523-WA0012.jpg">`
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
    let limparDadosTrilhas = document.querySelector('.cont-DadosTrilha-Inf')
    limparDadosTrilhas.innerHTML = ``
}
function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()
    limparDadosTrilhas()

    let trilhasReg = RegTrilha
    let nomeRegiao
    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    // document.querySelector('.cont-Reg').innerHTML =
    // `<p>Essas são as trilhas da região: ${trilhasReg}</p>`
    
    let nomesTrilhas
    nomesTrilhas =  document.querySelector('.cont-ListasTrilhas')
    for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="divsBttnTrilha">
                <p>
                    ${trilha.nome}
                </p>
            </div>`
        }
    
}
function mostrarInfTrilha(nomeTrilha) {
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if(logInOut()){
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
        `   <div class='dadosTrilha'>
                <img src="map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>
            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="map-pin-line.svg" class='iconsDadosTrilha'>
            </div>
            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="path.svg" class='iconsDadosTrilha'>
                <span>${dadosTrilha.distancia} / </span>
                <img src="timer.svg" class='iconsDadosTrilha'>
                <span> ${dadosTrilha.tempo}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="person-simple-hike.svg" class='iconsDadosTrilha'>
                <span>Relevo: ${dadosTrilha.relevo}</span> 
                <span> / Elevação: ${dadosTrilha.elevacao}</span>
            </div>                    
        `
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-fotos').innerHTML =
        `${dadosTrilha.img}`

    } else{
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
        `
            <img src="person-simple-hike.svg" class='iconsDadosTrilha'>
            <span>Trilha: ${dadosTrilha.nome}</span>
            <br>
            <img src="map-pin.svg" class='iconsDadosTrilha'>
            <span>De: ${dadosTrilha.pPartida}</span>
            <br>
            <span>Para: ${dadosTrilha.pChegada}</span>
            <img src="map-pin-line.svg" class='iconsDadosTrilha'>
            <br>
            <span>Dificuldade:</span>
            <br>
            <span>Indicada: ${dadosTrilha.nvlTSite}</span>
            <br>
            <span>Relatada: ${dadosTrilha.nvlTUsuario}</span>
            <br>
            <img src="path.svg" class='iconsDadosTrilha'>
            <span>${dadosTrilha.distancia}</span>
            <img src="timer.svg" class='iconsDadosTrilha'>
            <span>${dadosTrilha.tempo}</span>
            <br>
            <img src="map-trifold.svg" class='iconsDadosTrilha'>
            <span>Relevo: ${dadosTrilha.relevo}</span> 
            <span> / Elevação: ${dadosTrilha.elevacao}</span>         
        `

    }


}

//Área reservada para receber as instruções do funcionamento das Trilhas