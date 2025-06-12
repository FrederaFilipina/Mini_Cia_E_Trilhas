function limparListaTrilhas(){
    let limparListagemTrilhas = document.getElementById('listagemTrilhasRegiao')
    limparListagemTrilhas.innerHTML=``
}
function mostrarListaTrilhasN(){
    limparListaTrilhas()
    let nomeTrilhasRegiao = infTrilhas.filter(filtroRegiao => filtroRegiao.regiao === 'norte')
    document.getElementById('listagemTrilhasRegiao').innerHTML= `<p>Essas são as trilhas da região: NORTE</p> <ol class="listagemTrilhasGeral" id="listagemTrilhas"> </ol>`
    let listagemTrilhas = document.getElementById('listagemTrilhas')

    
    for (const element of nomeTrilhasRegiao) {
        console.log(element.nome)
        listagemTrilhas.innerHTML+=`<li><button onclick="mostrarInfTrilhas('${element.nome}')" class="botoesNomesTrilhas">${element.nome}</button></li>`
    }
}
function mostrarListaTrilhasC(){
    limparListaTrilhas()
    let nomeTrilhasRegiao = infTrilhas.filter(filtroRegiao => filtroRegiao.regiao === 'centro')
    document.getElementById('listagemTrilhasRegiao').innerHTML= `<p>Essas são as trilhas da região: CENTRAL</p> <ol class="listagemTrilhasGeral" id="listagemTrilhas"> </ol>`
    let listagemTrilhas = document.getElementById('listagemTrilhas')
    for (const element of nomeTrilhasRegiao) {
        console.log(element.nome)
        listagemTrilhas.innerHTML+=`<li><button onclick="mostrarInfTrilhas('${element.nome}')" class="botoesNomesTrilhas">${element.nome}</button></li>`
    }
}
function mostrarListaTrilhasL(){
    limparListaTrilhas()
    let nomeTrilhasRegiao = infTrilhas.filter(filtroRegiao => filtroRegiao.regiao === 'leste')
    document.getElementById('listagemTrilhasRegiao').innerHTML= `<p>Essas são as trilhas da região: LESTE</p> <ol class="listagemTrilhasGeral" id="listagemTrilhas"> </ol>`
    let listagemTrilhas = document.getElementById('listagemTrilhas')
    for (const element of nomeTrilhasRegiao) {
        console.log(element.nome)
        listagemTrilhas.innerHTML+=`<li><button onclick="mostrarInfTrilhas('${element.nome}')" class="botoesNomesTrilhas">${element.nome}</button></li>`
    }
}
function mostrarListaTrilhasS(){
    limparListaTrilhas()
    let nomeTrilhasRegiao = infTrilhas.filter(filtroRegiao => filtroRegiao.regiao === 'sul')
    document.getElementById('listagemTrilhasRegiao').innerHTML= `<p>Essas são as trilhas da região: SUL</p> <ol class="listagemTrilhasGeral" id="listagemTrilhas"> </ol>`
    let listagemTrilhas = document.getElementById('listagemTrilhas')
    for (const element of nomeTrilhasRegiao) {
        console.log(element.nome)
        listagemTrilhas.innerHTML+=`<li><button onclick="mostrarInfTrilhas('${element.nome}')" class="botoesNomesTrilhas">${element.nome}</button></li>`
    }
}

var infTrilhas = [
    {nome: 'nomeTrilhaN1', regiao: 'norte'},
    {nome: 'nomeTrilhaN2', regiao: 'norte'},

    {nome: 'nomeTrilhaC1', regiao: 'centro'},
    {nome: 'nomeTrilhaC2', regiao: 'centro'},

    {nome: 'nomeTrilhaL1', regiao: 'leste'},
    {nome: 'nomeTrilhaL2', regiao: 'leste'},

    {nome: 'nomeTrilhaS1', regiao: 'sul'},
    {nome: 'nomeTrilhaS2', regiao: 'sul'}
]