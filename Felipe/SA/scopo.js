const usuariosCadastrados = [{
    Usuario: "text",

    Senha: "1234",

    Nome: "text",

    Cpf: "1234",

    Tel: "4848",

    Email: "text@gmail.com",

    Nacimento: "2/8/2028"

}]



function cadastrar() {
    const userDigitado = document.getElementById("userUsuario")
    console.log(userDigitado)
    const senhaDigitada = document.getElementById('pass')
    console.log(senhaDigitada)

    const nomeDigitado = document.getElementById('nameDigitado')
    console.log(nomeDigitado);

    const cpfDigitado = document.getElementById("digitouCpf")
    console.log(cpfDigitado);

    const tellDigitado = document.getElementById("telef")

    console.log(tellDigitado);

    const emailDigitado = document.getElementById("emailUser")
    console.log(emailDigitado);

    const dataNasc = document.getElementById("dateNaciment")
    console.log(dataNasc.value);
    if (userDigitado.value.length === 0 || senhaDigitada.value.length === 0 || nomeDigitado.value.length === 0 || cpfDigitado.value.length === 0 || tellDigitado.value.length === 0 || emailDigitado.value.length === 0 || dataNasc.value.length === 0) {
        alert("preencha corretamente o formulario")
    } else {
        let retornocadastro = verifiarCadastro(cpfDigitado.value)
        let retornoUser = verificarUser(userDigitado.value)
        if (retornocadastro !== undefined) {
            alert("Cpf ja cadastrado em outra conta")
        } else if (retornoUser !== undefined) {
            alert("Usuario ja existente!!")
        } else {
            usuariosCadastrados.push({
                Usuario: userDigitado.value,

                Senha: senhaDigitada.value,

                Nome: nomeDigitado.value,

                Cpf: `${cpfDigitado.value} `,

                Tel: tellDigitado.value,

                Email: emailDigitado.value,

                Nacimento: dataNasc.value
            })
            mudarParaLogin()
        }

    }
}

function verifiarCadastro(c, user) {

    let cadastro = usuariosCadastrados.find(cpf => cpf.Cpf == c)
    console.log(cadastro)
    return cadastro
}
function verificarUser(user) {
    let cadastro = usuariosCadastrados.find(usuario => usuario.Usuario === user)
    console.log(cadastro);
    return cadastro
}
function mudarTela() {

    alert("Outra tela")
}


function logar() {


    const loginUser = document.getElementById("loginUser")
    console.log(loginUser.value);

    const loginSenha = document.getElementById('loginPas')
    console.log(loginSenha.value);

    let validarUser = verificarUser(loginUser.value)

    if (validarUser === undefined) {
        alert("Usuario nao cadastrado")
    } else if (validarUser.Senha == loginSenha.value) {
        alert("Logado !!!mudar tela!!!")
    } else {
        alert("Senha errada")
    }
}

function mostrarCadastro() {
    document.getElementById("login").style.display = "none"
    document.getElementById("cadastro").style.display = "block"

}
function mudarParaLogin() {
    document.getElementById("login").style.display = "block"
    document.getElementById("cadastro").style.display = "none"



}
