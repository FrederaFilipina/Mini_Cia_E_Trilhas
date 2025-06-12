inicializaçao()

function Avalicao() {
    document.getElementById("avaAmigos").value
    document.getElementById("avaTrilha").value

}
function confirma() {
    esconderTodas()
    document.getElementById('confirma').style.display = 'flex'
    document.getElementById('navAmigo').style.display = 'none'
}
function amigoUm() {
    esconderTodas()
    document.getElementById('compUm').style.display = 'flex'
}
function amigoDois() {
    esconderTodas()
    document.getElementById('compDois').style.display = 'flex'
}
function amigoTres() {
    esconderTodas()
    document.getElementById('compTres').style.display = 'flex'
}
function amigoQuatro() {
    esconderTodas()
    document.getElementById('compQuatro').style.display = 'flex'
}
function amigoCinco() {
    esconderTodas()
    document.getElementById('compCinco').style.display = 'flex'
}
function esconderTodas() {
    document.getElementById('compUm').style.display = 'none'
    document.getElementById('compDois').style.display = 'none'
    document.getElementById('compTres').style.display = 'none'
    document.getElementById('compQuatro').style.display = 'none'
    document.getElementById('compCinco').style.display = 'none'
}
