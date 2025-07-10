// Área reservada para as variáveis que vão funcionar como Banco de Dados

const infsListaTrilhas = [
    { trilha: 'TrilhaN1', pPartida: ``, pChegada: ``, 
    regiao: 'Norte', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },

    { trilha: 'TrilhaN2', pPartida: ``, pChegada: ``, 
    regiao: 'Norte', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },
    
    //-----------------------------------------------------------------------------

    { trilha: 'TrilhaC1', pPartida: ``, pChegada: ``, 
    regiao: 'Central', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },

    { trilha: 'TrilhaC2', pPartida: ``, pChegada: ``,
    regiao: 'Central', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },

    //-----------------------------------------------------------------------------

    { trilha: 'TrilhaL1', pPartida: ``, pChegada: ``, 
    regiao: 'Leste', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },
    
    { trilha: 'TrilhaL2', pPartida: ``, pChegada: ``,
    regiao: 'Leste', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },

    //-----------------------------------------------------------------------------

    { trilha: 'TrilhaS1', pPartida: ``, pChegada: ``, 
    regiao: 'Sul', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },
        
    { trilha: 'TrilhaS2', pPartida: ``, pChegada: ``,
    regiao: 'Sul', cep: ``,
    distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
    nvlTSite: ``, nvlTUsuario: [], 
    obs: `` },
]

localStorage.setItem('ListagemTrilhas', JSON.stringify(infsListaTrilhas))

// -------------------------

/* (Fred) Área destinado aos códigos que:
1 - Vão filtrar as trilhas por região ao clicar nos botões de cada região;
2 - Vai mostrar as informações da trilha selecionada;

SVG viewport para transformar as imagens do map
*/

function logInOut(){
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
    let limparListTrilhas = document.querySelector('.cont-infoListTrilhas')
    limparListTrilhas.innerHTML = ``
}
function limparDadosTrilha() {
    let limparDdsTrilha = document.getElementById('cont-infDadosTrilha')
    limparDdsTrilha.innerHTML = ``
}
console.log(logInOut())

function mostrarListTrilhasReg(RegTrilha){
    limparTrilhas()
    limparDadosTrilha()
    let trilhasReg = RegTrilha
        let nomeRegiao
        nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
        document.querySelector('.cont-infoListTrilhas').innerHTML =
        `<p>Essas são as trilhas da região: ${trilhasReg}</p>
        <br>
        <ol id="ListTrilhas"></ol>`
        let nomesTrilhas
        nomesTrilhas = document.getElementById('ListTrilhas')
        for(const element of nomeRegiao){ 
            nomesTrilhas.innerHTML+=
            `<p><li><button onclick="mostrarInfTrilha('${element.trilha}')" class="cont-button-nomeTrilha">
            <p>${element.trilha}</p</button></li><p>`
        }  
}
function mostrarInfTrilha(nomeTrilha){
    // limparDadosTrilha()
    let trilhaNome = nomeTrilha
    let dadosTrilha
    dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
    document.getElementById('cont-infDadosTrilha').innerHTML =
        `<p> Trilha: ${dadosTrilha.trilha},
        <br> Distância: ${dadosTrilha.distancia}, Tempo: ${dadosTrilha.tempo}
        <br> Dificuldade: ${dadosTrilha.dificuldade}</p>`
}

if(logInOut() != true){


 }



// (Fred)---------------