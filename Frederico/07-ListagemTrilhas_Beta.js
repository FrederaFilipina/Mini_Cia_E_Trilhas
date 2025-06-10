function ocultarListaTrilhas(){
    document.getElementById('listaTrilhasN').style.display='none'
    document.getElementById('listaTrilhasC').style.display='none'
    document.getElementById('listaTrilhasL').style.display='none'
    document.getElementById('listaTrilhasS').style.display='none'
}

function mostrarListaTrilhasN(){
    ocultarListaTrilhas()
    document.getElementById('listaTrilhasN').style.display='flex'


}
function mostrarListaTrilhasC(){
    ocultarListaTrilhas()
    document.getElementById('listaTrilhasC').style.display='flex'
}
function mostrarListaTrilhasL(){
    ocultarListaTrilhas()
    document.getElementById('listaTrilhasL').style.display='flex'
}
function mostrarListaTrilhasS(){
    ocultarListaTrilhas()
    document.getElementById('listaTrilhasS').style.display='flex'
}


// function mostrarInfTrilha(ID){
//     document.getElementById(`${ID}`).style.display='flex'
// }

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