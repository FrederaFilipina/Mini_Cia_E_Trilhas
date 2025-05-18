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

        let idade = validarData(dataNasc.value)

        if (retornocadastro !== undefined) {
            alert("Cpf ja cadastrado em outra conta")
        } else if (retornoUser !== undefined) {
            alert("Usuario ja existente!!")
        } else if (idade) {
            alert("Voce nao tem idade para fazer cadastro")
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
            alert("voce foi cadastrado")

        }

    }
}

function verifiarCadastro(c, user) {

    let cadastro = usuariosCadastrados.find(value => value.Cpf == c)
    console.log(cadastro)
    return cadastro
}
function verificarUser(user) {
    let cadastro = usuariosCadastrados.find(value => value.Usuario === user)
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
function validarData(date) {
    let idadeMinimaCadastro = 18

    let dataAtual = new Date

    let anoAtual = dataAtual.getFullYear()

    let mesAtual = dataAtual.getMonth() + 1

    let dataNacimento = new Date(date)

    let idade = anoAtual - dataNacimento.getFullYear() - 1

    if (dataNacimento.getMonth() + 1 > mesAtual || (dataNacimento.getMonth() + 1 == mesAtual && dataNacimento.getDate() >= dataAtual.getDate())) {
        idade++
    }
    let validando = idade <= idadeMinimaCadastro ? true : false


    return validando
    // Antes de pesguisar saiu isso da mente hehe ....
    // let data = "2000-04-17"
    // let anoArray = []
    // let mesArray = []

    //  for (let index = 0; index <= data.length; index++) {
    //     if(index < 4){
    //         anoArray.push(data[index])
    //     }else if(index >=5 && index <=6){
    //         mesArray.push(data[index])
    //     }
    //  }
    //  let ano = anoArray.reduce((ano, soma)=> ano+ soma)
    //  let idade = anoAtual - Number(ano) -1
    //  let mesIdade = mesArray.reduce((ano , soma)=> ano+soma)
    //  let res = Number(mesIdade) - mesAtual 
    //  console.log(idade);
    // if(res>=0){
    //     idade++
    // }
    // console.log(idade);
}
