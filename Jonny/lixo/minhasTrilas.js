let botao_aberto = false
let cadastroUsuarios = JSON.parse(localStorage.getItem('CadastroUser'))
console.log(cadastroUsuarios);
const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

function btn_exp() {
    botao_aberto = !botao_aberto
    console.log(document.getElementById("navBar").style.width)
    document.getElementById("navBar").style.width = botao_aberto ? "300px" : "80px"
}

document.getElementById("navBar").addEventListener('mouseleave', () => {

    document.getElementById("navBar").style.width = '80px'

})

function mostrarusuario() {
    document.getElementById("usuario").style.display = "flex"
    document.getElementById("minhasTrilas").style.display = "flex"

    let div = document.getElementById("perfil")

    
    let usuario = cadastroUsuarios.find(usuario => usuario.logado === true)

    if (usuario === undefined) {

        abrirLogin()
        
    } else {
        
        div.innerHTML = `<p>Nome : ${usuario.nomeUsuario}<p/>
        <p>Email : ${usuario.email}</p>
        <p>Sexo : ${usuario.sexo}</p>
        <p>Telefone : ${usuario.telefone}</p>
        <p>CPF : ${usuario.cpf}</p>
        <p>Avaliação : ${usuario.avaliaçãoUser}</p>`
    
    }

}

function botao_minTrilas(){
    document.getElementById("trilhas").style.display = "flex"

    console.log(eventos);
    

}


