const bancoDados= localStorage

let cadastroUsuario = JSON.parse(bancoDados.getItem('CadastroUser')) || []

function entraCadastro(event) {
    event.preventDefault()

    const nomeCompleto = document.getElementById("nomeDigtado")

    const cpf = document.getElementById("cpfDig")

    const dataNacimento = document.getElementById("dataNacimento")

    const sexo = document.getElementsByName("sexo")

    const telefone = document.getElementById("telefDigi")

    const email =document.getElementById("emailDigit")

    const senha=document.getElementById("senhaDigit")

    const nomeUsuario =document.getElementById("userDigit")

    let sexoUser =descobrirSexo(sexo)

    let cpfValidado = verificarCpf(cpf.value)

    let emailValidado = verificarEmail(email.value)

    let telefoneValidado = verificarTelefone(telefone.value)

    let nomeUsuarioValidado = verificarUsuario(nomeUsuario.value)
    
}