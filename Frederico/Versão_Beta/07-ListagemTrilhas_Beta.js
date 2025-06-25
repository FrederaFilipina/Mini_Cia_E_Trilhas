var infTrilhas = [
    { nome: 'TrilhaN1', regiao: 'Norte', km: '10km', tempo: '1h00', dificuldade: 'SIM'},
    { nome: 'TrilhaN2', regiao: 'Norte', km: '20km', tempo: '2h00', dificuldade: 'SIM' },


    { nome: 'TrilhaC1', regiao: 'Central', km: '30km', tempo: '3h00', dificuldade: 'SIM'},
    { nome: 'TrilhaC2', regiao: 'Central', km: '40km', tempo: '4h00', dificuldade: 'SIM' },

    { nome: 'TrilhaL1', regiao: 'Leste', km: '50km', tempo: '5h00', dificuldade: 'SIM' },
    { nome: 'TrilhaL2', regiao: 'Leste', km: '60km', tempo: '6h00', dificuldade: 'SIM' },

    { nome: 'TrilhaS1', regiao: 'Sul', km: '70km', tempo: '7h00', dificuldade: 'SIM' },
    { nome: 'TrilhaS2', regiao: 'Sul', km: '80km', tempo: '8h00', dificuldade: 'SIM' }
]

function limparListagemTrilhas() {
    let limparListagemTrilhas = document.getElementById('nomeRegiaoListaTrilhas')
    limparListagemTrilhas.innerHTML = ``
}

function limparDadosTrilha() {
    let limparDadosTrilha = document.getElementById('dadosDaTrilha')
    limparDadosTrilha.innerHTML = ``
}

function mostrarListaTrilhasRegiao(RegTrilha){
    limparListagemTrilhas()
    limparDadosTrilha()
    let trilhasReg = RegTrilha
        let nomeRegiao

        nomeRegiao = infTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
        document.getElementById('nomeRegiaoListaTrilhas').innerHTML =
        `<h3>Essas são as trilhas da região: ${trilhasReg}</h3>
        <ol id="listagemTrilhas"></ol>`

        let nomesTrilhas
        nomesTrilhas = document.getElementById('listagemTrilhas')

        for(const element of nomeRegiao){ 
            nomesTrilhas.innerHTML+=
            `<h3>
            <li>
            <button onclick="mostrarInfTrilha('${element.nome}')" class="botoesNomesTrilhas">
            <h3>${element.nome}</h3
            </button>
            </li>
            <h3>`
        }  
}

function mostrarInfTrilha(nomeTrilha){
    limparDadosTrilha()
    let trilhaNome = nomeTrilha

    let dadosTrilha
    dadosTrilha = infTrilhas.filter(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
    
    for(const element of dadosTrilha){
        document.getElementById('dadosDaTrilha').innerHTML =
        `<h3> Trilha: ${element.nome},
        <br> Distância: ${element.km}, Tempo: ${element.tempo}
        <br> Dificuldade: ${element.dificuldade}</h3>`
    }    
}
