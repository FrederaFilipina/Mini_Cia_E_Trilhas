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


function mostrarInfTrilha(ID){
    document.getElementById(`${ID}`).style.display='flex'
}

infTotlTrilhas = [
    {nome: TrilhaN1, regiao: norte, dist: 10km, tempo: 01h00m, dificuldade: MUITO}
]