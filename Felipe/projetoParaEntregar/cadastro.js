const bancoDados = localStorage

let cadastroUsuarios = JSON.parse(bancoDados.getItem('CadastroUser')) || []


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
function verificarIdade(dataNaci){

    const idadeMinima = 18

    const dataAtual = new Date
    const mesAtual = dataAtual.getMonth() + 1
    const anoAtual = dataAtual.getFullYear()
    const diaAtual = dataAtual.getDate()

    const anoNacimentoUser = Number(dataNaci.split("-")[0])
    const mesNacimentoUser = Number(dataNaci.split("-")[1])
    const diaNacimentoUser = Number(dataNaci.split("-")[2])
    
    
    
    const idadeUser = (anoNacimentoUser - anoAtual) * -1 


    if (idadeUser === idadeMinima || idadeUser > idadeMinima){
        
        return false

    }else {
        if(mesNacimentoUser < mesAtual){

            return true
        }else if(mesNacimentoUser === mesAtual){
            if(diaNacimentoUser < diaAtual){

                return true

            }else return false

        }else return false
    }

    



}
function descobrirSexo(sexo) {
    const outroSexo = document.getElementById("sexoDigit")
    if (sexo[0].checked) {

        return "Mascolino"

    } else if (sexo[1].checked) {

        return "Feminino"
    } if (sexo[2].checked) {
        console.log(outroSexo.value);


        return outroSexo.value
    }


}
function limparInput() {
    let sexo = document.getElementsByName("sexo")

    document.getElementById("nomeDigtado").value = ""

    document.getElementById("cpfDig").value = ""

    document.getElementById("dataNacimento").value = ""

    document.getElementById("telefDigi").value = ""

    document.getElementById("emailDigit").value = ""

    document.getElementById("senhaDigit").value = ""

    document.getElementById("userDigit").value = ""

    document.getElementById("infoUser").innerHTML = ""

    document.getElementById("sexoDigit").value = ""



    for (let index = 0; index < sexo.length; index++) {

        sexo[index].checked = false

    }
}
function salvarBancoDados() {

    bancoDados.setItem("CadastroUser", JSON.stringify(cadastroUsuarios))

}
function abrirLogin() {


}
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

    const infoUser = document.getElementById("infoUser")

    let sexoUser = descobrirSexo(sexo)

    let cpfValidado = verificarCpf(cpf.value)

    let emailValidado = verificarEmail(email.value)

    let telefoneValidado = verificarTelefone(telefone.value)

    let nomeUsuarioValidado = verificarUsuario(nomeUsuario.value)
    
    let validandoIdadeMinima = verificarIdade(dataNacimento.value)

    
    if (validandoIdadeMinima) {

        infoUser.innerHTML = `<p>*Você nao tem idade miníma para cadastrar</p>`
        
    } else if (cpfValidado !== undefined) {

        infoUser.innerHTML = `<p>*Cpf ja esta sendo utilizado</p>`

    } else if (emailValidado !== undefined) {

        infoUser.innerHTML = `<p>*Email ja esta sendo utilizado</p>`

    } else if (telefoneValidado !== undefined) {

        infoUser.innerHTML = "<p>*Telefone ja esta cadastrado</p>"
    } else if (nomeUsuarioValidado !== undefined) {

        infoUser.innerHTML = "<p>*Nome de usuário ja esta sendo utilizado</p>"

    } else {

        cadastroUsuarios.push({
            nomeCompleto: nomeCompleto.value,
            cpf: cpf.value,
            dataNacimento: dataNacimento.value,
            sexo: sexoUser,
            telefone: telefone.value,
            email: email.value,
            senha: senha.value,
            nomeUsuario: nomeUsuario.value,
            avaliaçãoUser: "10/10",
            evento: false,
            logado: false

        })
        limparInput()
        salvarBancoDados()
        abrirLogin()
        console.log(cadastroUsuarios)


    }
}