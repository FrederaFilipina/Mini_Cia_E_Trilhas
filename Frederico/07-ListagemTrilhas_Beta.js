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


function mostrarInfTrilha(){
    document.getElementById('infTrilha').style.display='flex'
}

infTrilhaN1()