// Área reservada para as variáveis que vão funcionar como Banco de Dados

const infsListaTrilhas = [
    { nome: 'TrilhaN1', regiao: 'Norte', km: '10km', tempo: '1h00', dificuldade: 'SIM'},
    { nome: 'TrilhaN2', regiao: 'Norte', km: '20km', tempo: '2h00', dificuldade: 'SIM' },

    { nome: 'TrilhaC1', regiao: 'Central', km: '30km', tempo: '3h00', dificuldade: 'SIM'},
    { nome: 'TrilhaC2', regiao: 'Central', km: '40km', tempo: '4h00', dificuldade: 'SIM' },

    { nome: 'TrilhaL1', regiao: 'Leste', km: '50km', tempo: '5h00', dificuldade: 'SIM' },
    { nome: 'TrilhaL2', regiao: 'Leste', km: '60km', tempo: '6h00', dificuldade: 'SIM' },

    { nome: 'TrilhaS1', regiao: 'Sul', km: '70km', tempo: '7h00', dificuldade: 'SIM' },
    { nome: 'TrilhaS2', regiao: 'Sul', km: '80km', tempo: '8h00', dificuldade: 'SIM' }
]

// -------------------------

/* (Fred) Área destinado aos códigos que:
1 - Vão filtrar as trilhas por região ao clicar nos botões de cada região;
2 - Vai mostrar as informações da trilha selecionada;
*/

function limparTrilhas() {
    let limparListTrilhas = document.getElementById('cont-infoListTrilhas')
    limparListTrilhas.innerHTML = ``
}
// function limparDadosTrilha() {
//     let limparDdsTrilha = document.getElementById('cont-infDadosTrilha')
//     limparDdsTrilha.innerHTML = ``
// }

function mostrarListTrilhasReg(RegTrilha){
    limparTrilhas()
    // limparDadosTrilha()
    let trilhasReg = RegTrilha
        let nomeRegiao
        nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
        document.getElementById('cont-infoListTrilhas').innerHTML =
        `<h3>Essas são as trilhas da região: ${trilhasReg}</h3>
        <ol id="ListTrilhas"></ol>`
        let nomesTrilhas
        nomesTrilhas = document.getElementById('ListTrilhas')
        for(const element of nomeRegiao){ 
            nomesTrilhas.innerHTML+=
            `<h3><li><button onclick="mostrarInfTrilha('${element.nome}')" class="cont-button-nomeTrilha">
            <h3>${element.nome}</h3</button></li><h3>`
        }  
}
function mostrarInfTrilha(nomeTrilha){
    // limparDadosTrilha()
    let trilhaNome = nomeTrilha
    let dadosTrilha
    dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
    document.getElementById('cont-infDadosTrilha').innerHTML =
        `<h3> Trilha: ${dadosTrilha.nome},
        <br> Distância: ${dadosTrilha.km}, Tempo: ${dadosTrilha.tempo}
        <br> Dificuldade: ${dadosTrilha.dificuldade}</h3>`
}

// (Fred)---------------