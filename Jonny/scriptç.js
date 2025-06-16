function btn_exp() {

    document.getElementById("navBar").style.width = "300px"

}

document.getElementById("navBar").addEventListener('mouseleave', () => {

    document.getElementById("navBar").style.width = '80px'

})


function btn_usuario() {
    document.getElementById("navBar")
}

function mostrarusuario() {
    document.getElementById("usuario").innerHTML = `<div id="perfil">
            <div>
                <p>Nome : Jose  </p>
                
            </div>
        </div>`
}
