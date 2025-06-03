const bancoDados = localStorage

let cadastroUsuarios = JSON.parse(bancoDados.getItem('CadastroUser')) || []

function entraCadastro(event) {
    event.preventDefault()

    const nomeCompleto = document.getElementById("nomeDigtado")

    const cpf = document.getElementById("cpfDig")

    const dataNacimento = document.getElementById("dataNacimento")

    const sexo = document.getElementsByName("sexo")

    const telefone = document.getElementById("telefDigi")

    const email = document.getElementById("emailDigit")

    const senha = document.getElementById("senhaDigit")

    const nomeUsuario = document.getElementById("userDigit")

    let sexoUser = descobrirSexo(sexo)

    let cpfValidado = verificarCpf(cpf.value)

    let emailValidado = verificarEmail(email.value)

    let telefoneValidado = verificarTelefone(telefone.value)

    let nomeUsuarioValidado = verificarUsuario(nomeUsuario.value)

}

function verificarCpf(cpf) {

    let pesquisa = cadastroUsuarios.find(cpfBanco => cpfBanco.cpf === cpf)
    return pesquisa
}
function verificarEmail(email) {

    let pesquisa = cadastroUsuarios.find(emailDados => emailDados.email === email)

    return pesquisa
}
function verificarTelefone(telef) {

    let pesquisa = cadastroUsuarios.find(telefo => telefo.telefone === telef)

    return pesquisa
}
function verificarUsuario(nomeUsuario) {

    let pesquisa = cadastroUsuarios.find(UserName => UserName.nomeUsuario === nomeUsuario)

    return pesquisa
}

function descobrirSexo(sexo) {

    if (sexo[0].checked) {

        return "Mascolino"

    } else if (sexo[1].checked) {

        return "Feminino"
    } if (sexo[2].checked) {

        return sexo[3].value

    }


}