const bancoDados = localStorage

let cadastroUsuarios = JSON.parse(bancoDados.getItem('CadastroUser')) || []

limitarDataCadastroData()

//display flex/none
function mostrarCep(){
    document.getElementById("contCep").style.display = "flex"
    
}
function esconderCep(){
    
    document.getElementById("contCep").style.display = "none"
}
function abrirPaginaUsuário(){
    
}
function abrirLogin() {


}
//-----------------------------------//

function limitarDataCadastroData() {

    const inuputData = document.getElementById("dataNacimento")
    
    const idadeMinima = 18
    const dataAtual = new Date()
    
    const idadeAnoLimite = dataAtual.getFullYear() - idadeMinima

    const mesAtual= dataAtual.getMonth()- 1 

    const idadeMesLimite = mesAtual >= 10 ? mesAtual : `0${mesAtual}`
    
    const diaAtual= dataAtual.getDate()
    console.log("aqui é o dia atual " + diaAtual);
    

    const idadeDiaLimite = diaAtual >= 10 ? diaAtual : `0${diaAtual}`


    let dataLimiteCadastro = `${idadeAnoLimite}-${idadeMesLimite}-${idadeDiaLimite}`

    console.log(dataLimiteCadastro);
    
    inuputData.setAttribute("max",dataLimiteCadastro)

    console.log(inuputData);
    
}
function verificandoIdade(dataN) {
    const idadeMinima = 18

    const dataAtual = new Date
    const mesAtual = dataAtual.getMonth() + 1
    const anoAtual = dataAtual.getFullYear()
    const diaAtual = dataAtual.getDate()

    const anoNacimentoUser = dataN.split("-")[0]
    const mesNacimentoUser = dataN.split("-")[1]
    const diaNacimentoUser = dataN.split("-")[2]
    
    
    let idadeUser = (anoNacimentoUser - anoAtual) * -1 
    console.log(typeof idadeUser);
    
    if(mesNacimentoUser >= mesAtual && diaNacimentoUser >= diaAtual){
        
         idadeUser ++ 

    }

    let verificaçãoIdade = idadeUser < idadeMinima ? true : false

    return verificaçãoIdade

    
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
        
        return "Nao definido"
    }


}
function limparInput() {

    //Cadastro
    let sexo = document.getElementsByName("sexo")

    document.getElementById("nomeDigtado").value = ""

    document.getElementById("cpfDig").value = ""

    document.getElementById("dataNacimento").value = ""

    document.getElementById("telefDigi").value = ""

    document.getElementById("emailDigit").value = ""

    document.getElementById("senhaDigit").value = ""

    document.getElementById("userDigit").value = ""

    document.getElementById("infoUser").innerHTML = ""

    for (let index = 0; index < sexo.length; index++) {

        sexo[index].checked = false

    }
    //Login
    document.getElementById("infoUserLogin").innerHTML = ""

    document.getElementById("senhaLogin").value = ""

    document.getElementById("usuarioLogin").value=""


}
function salvarBancoDados() {

    bancoDados.setItem("CadastroUser", JSON.stringify(cadastroUsuarios))

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

    let validandoIdadeMinima = verificandoIdade(dataNacimento.value)

    let cep = document.getElementById("cep").value || "Não reside em Florianópolis"
    

    if (nomeCompleto.value.length ===0 || cpf.value.length ===0 ||dataNacimento.value.length ===0 ||telefone.value.length ===0 ||email.value.length ===0 ||senha.value.length ===0 ||nomeUsuario.value.length ===0 ) {

        infoUser.innerHTML = `<p>*Preencha todos os campos corretamente</p>`
        
    } else if (cpfValidado !== undefined) {

        infoUser.innerHTML = `<p>*Cpf ja esta sendo utilizado</p>`
        
    } else if (validandoIdadeMinima ) {

        infoUser.innerHTML = `<p>*Você nao tem idade miníma para cadastrar</p>`

    } else if (telefoneValidado !== undefined) {

        infoUser.innerHTML = "<p>*Telefone ja esta cadastrado</p>"
        
    } else if (emailValidado !== undefined)  {
        
        infoUser.innerHTML = `<p>*Email ja esta sendo utilizado</p>`
        
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
            cep: cep,
            senha: senha.value,
            nomeUsuario: nomeUsuario.value,
            avaliaçãoUser: "10/10",
            avaliações: [],
            evento: false,
            logado: false

        })
        limparInput()
        salvarBancoDados()
        abrirLogin()
        console.log(cadastroUsuarios)


    }
}
function logar(event) {
    event.preventDefault()

    let infoUserLogin = document.getElementById("infoUserLogin")

    let user = document.getElementById("usuarioLogin").value

    let senha = document.getElementById("senhaLogin").value

    let userCadastroUsuario = verificarUsuario(user)

    if (user.length ===0 || senha.length ===0) {

        infoUserLogin.innerHTML = "*Preencha todos os campos"
        
    } else if (userCadastroUsuario===undefined) {
        
        infoUserLogin.innerHTML = "*Usuário não cadastrado"
        
    } else if(userCadastroUsuario.senha === senha){
        userCadastroUsuario.logado = true
        salvarBancoDados()
        abrirPaginaUsuário()
        limparInput()


    }else  infoUserLogin.innerHTML = "*Senha incorreta"
    
}
