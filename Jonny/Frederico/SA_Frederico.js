

let cadastroUsuarios = JSON.parse(localStorage.getItem('CadastroUser')) || []
const trilhasCadastradas = JSON.parse(localStorage.getItem("eventos")) || [];

limitarDataCadastroData()

//display flex/none
function mostrarCep() {
    document.getElementById("contCep").style.display = "flex"

}
function esconderCep() {

    document.getElementById("contCep").style.display = "none"
}
function abrirPaginaUsuário() {


    esconderLogin()
}

function esconderLogin() {
    document.getElementById("Login").style.display = "none"
}

//-----------------------------------//



function limitarDataCadastroData() {

    const inuputData = document.getElementById("dataNacimento")

    const idadeMinima = 18
    const dataAtual = new Date()

    const idadeAnoLimite = dataAtual.getFullYear() - idadeMinima

    const mesAtual = dataAtual.getMonth() - 1

    const idadeMesLimite = mesAtual >= 10 ? mesAtual : `0${mesAtual}`

    const diaAtual = dataAtual.getDate()



    const idadeDiaLimite = diaAtual >= 10 ? diaAtual : `0${diaAtual}`


    let dataLimiteCadastro = `${idadeAnoLimite}-${idadeMesLimite}-${idadeDiaLimite}`



    inuputData.setAttribute("max", dataLimiteCadastro)



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

    if (mesNacimentoUser >= mesAtual && diaNacimentoUser >= diaAtual) {

        idadeUser++

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
    } else return false



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

    document.getElementById("cep").value = ""

    for (let index = 0; index < sexo.length; index++) {

        sexo[index].checked = false

    }
    //Login
    document.getElementById("infoUserLogin").innerHTML = ""

    document.getElementById("senhaLogin").value = ""

    document.getElementById("usuarioLogin").value = ""


}
function salvarBancoDados() {

    localStorage.setItem("CadastroUser", JSON.stringify(cadastroUsuarios))

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


    if (nomeCompleto.value.length === 0 || cpf.value.length === 0 || dataNacimento.value.length === 0 || telefone.value.length === 0 || email.value.length === 0 || senha.value.length === 0 || nomeUsuario.value.length === 0) {

        infoUser.innerHTML = `<p>*Preencha todos os campos corretamente</p>`

    } else if (cpfValidado !== undefined) {

        infoUser.innerHTML = `<p>*Cpf ja esta sendo utilizado</p>`

    } else if (validandoIdadeMinima) {

        infoUser.innerHTML = `<p>*Você nao tem idade miníma para cadastrar</p>`

    } else if (sexoUser === false) {

        infoUser.innerHTML = "<p>Selecione um Sexo</p>"

    } else if (telefoneValidado !== undefined) {

        infoUser.innerHTML = "<p>*Telefone ja esta cadastrado</p>"

    } else if (emailValidado !== undefined) {

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
            historico: [],
        })
        limparInput()
        salvarBancoDados()
        esconderSection()
        abrirLoginCadastro("contLogin")

    }
}
function logar(event) {
    event.preventDefault()

    let infoUserLogin = document.getElementById("infoUserLogin")

    let user = document.getElementById("usuarioLogin").value

    let senha = document.getElementById("senhaLogin").value

    let userCadastroUsuario = verificarUsuario(user)

    if (user.length === 0 || senha.length === 0) {

        infoUserLogin.innerHTML = "*Preencha todos os campos"

    } else if (userCadastroUsuario === undefined) {

        infoUserLogin.innerHTML = "*Usuário não cadastrado"

    } else if (userCadastroUsuario.senha === senha) {
        localStorage.setItem("logado", JSON.stringify(userCadastroUsuario))
        salvarBancoDados()
        abrirPaginaUsuário()
        limparInput()
        mostrarAlerta("Logado");

    } else infoUserLogin.innerHTML = "*Senha incorreta"

}



//funcionamento da pagina
function esconderSection() {
    document.getElementById("Login").style.color = "#0c0c0ca9"
    document.getElementById("Trilhas").style.color = "#0c0c0ca9"
    document.getElementById("Eventos").style.color = "#0c0c0ca9"
    document.getElementById("btn-minhas-trilhas").style.color = "#0c0c0ca9"

    document.querySelector(`.cont-fred`).style.display = "none"
    document.querySelector(`.conteiner-cadastro`).style.display = "none"
    document.querySelector(`.conteiner-login`).style.display = "none"
    document.querySelector(`.conteiner-MinhasTrilhas`).style.display = "none"





}

function abrirLoginCadastro(cont) {
    document.getElementById("contCadast").style.display = "none"
    document.getElementById("contLogin").style.display = "none"

    document.getElementById(cont).style.display = "flex"

}

function abrirTela(nome) {
    esconderSection()
    let cont = nome.split(',', 2)
    document.getElementById(cont[0]).style.color = "rgb(255, 255, 255)"


    document.querySelector(`.${cont[1]}`).style.display = "flex"

}

function usuarioLogado() {
    return JSON.parse(localStorage.getItem("logado"))
}

if (usuarioLogado()) {
    abrirPaginaUsuário()
}

// Frederico
//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage

const infsListaTrilhas = [
    {
        nome: 'TrilhaN1', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
    {
        nome: 'TrilhaN1', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
    {
        nome: 'TrilhaN1', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaN2', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaC1', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaC2', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaL1', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaL2', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaS1', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },

    {
        nome: 'TrilhaS2', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        obs: ``
    },
]
localStorage.setItem('ListagemTrilhas', JSON.stringify(infsListaTrilhas))

//Área reservada para receber as varáveis que vão agir como um "Banco de Dados", tanto aqui no JS quando no LocalStorage



//Área reservada para receber as instruções do funcionamento das Trilhas

function logInOut() {
    let usuario = localStorage.getItem("logado")
    if (usuario != undefined) {
        return true
    }
    else {
        return false
    }

}
function limparTrilhas() {
    let limparListTrilhas = document.querySelector('.cont-list-dados-trilhas')
    limparListTrilhas.innerHTML = ``
}

function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()

    let trilhasReg = RegTrilha
    let nomeRegiao
    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    document.querySelector('.cont-info-Reg').innerHTML =
        `<p>Essas são as trilhas da região: ${trilhasReg}</p>`

    let nomesTrilhas
    nomesTrilhas = document.querySelector('.cont-list-dados-trilhas')

    if (logInOut()) {
        for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
                `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="bttnNomeTrilhas">
                <p>
                    ${trilha.nome}, LOG IN
                    <br>Km: ${trilha.distancia}
                    <br>Inicio: ${trilha.pPartida}
                    <br>Chegada: ${trilha.pChegada}
                </p>
            </div>`
        }
    } else {
        for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
                `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="bttnNomeTrilhas">
                <p>
                    ${trilha.nome}, LOG OUT
                    <br>Km: ${trilha.distancia}
                    <br>Inicio: ${trilha.pPartida}
                    <br>Chegada: ${trilha.pChegada}
                </p>
            </div>`
        }
    }


}
function mostrarInfTrilha(nomeTrilha) {
    limparDadosTrilha()
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if (logInOut()) {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
        document.querySelector('.cont-infoDdsTrilha').innerHTML =
            `<p> Trilha: ${dadosTrilha.trilha}</p>
            <br>
            <p>Infs Completas</p>`
    } else {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.trilha === trilhaNome)
        document.querySelector('.cont-infoDdsTrilha').innerHTML =
            `<p> Trilha: ${dadosTrilha.trilha}</p>
            <br>
            <p>Infs Básicas</p>
            <button onclick="LOGIN">Login</button>`
    }
}


// jonny

const lista = document.getElementById("trilhas");
const trilhasView = document.getElementById("minhas-trilhas-view");
const botaoMinhasTrilhas = document.getElementById("btn-minhas-trilhas");

let indexEditando = null;

function renderizarTrilhas() {
    const atualizarClicando = JSON.parse(localStorage.getItem("eventos")) || [];
    const usuario = usuarioLogado()


    lista.innerHTML = "";
    const filtrarPorCPF = atualizarClicando.filter(evento => evento.participantes.find(usuarioTrilha => usuarioTrilha.cpf === usuario.cpf))

    filtrarPorCPF.forEach((trilha, index) => {
        const divTrilha = document.createElement("div");
        divTrilha.classList.add("trilha-item");

        if (indexEditando === index) {
            divTrilha.innerHTML = `
        <form class="form-edicao">
          <label>Trilha: <input type="text" name="trilha" value="${trilha.trilha}" /></label><br>
          <label>Data: <input type="date" name="data" value="${trilha.data}" /></label><br>
          <label>Hora: <input type="time" name="hora" value="${trilha.hora}" /></label><br>
          <label>Ponto: <input type="text" name="ponto" value="${trilha.ponto}" /></label><br>
          <label>Vagas: <input type="number" name="vagas" value="${trilha.vagas}" /></label><br>
          <button type="submit">Salvar</button>
          <button type="button" class="cancelar-edicao">Cancelar</button>
        </form>
      `;
        } else {
            divTrilha.innerHTML = `
        <p><strong>Trilha:</strong> ${trilha.trilha}</p>
        <p><strong>Data:</strong> ${trilha.data}</p>
        <p><strong>Horário:</strong> ${trilha.hora}</p>
        <p><strong>Ponto de encontro:</strong> ${trilha.ponto}</p>
        <p><strong>Vagas disponíveis:</strong> ${trilha.vagas}</p>
        <button class="editar-btn" data-index="${index}">Editar</button>
      `;
        }

        lista.appendChild(divTrilha);
    });
}

botaoMinhasTrilhas.addEventListener("click", () => {
    trilhasView.style.display = "block";
    indexEditando = null;
    renderizarTrilhas();
});

lista.addEventListener("click", (event) => {
    if (event.target.classList.contains("editar-btn")) {
        indexEditando = parseInt(event.target.getAttribute("data-index"));
        renderizarTrilhas();
    }

    if (event.target.classList.contains("cancelar-edicao")) {
        indexEditando = null;
        renderizarTrilhas();
    }
});

lista.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const index = indexEditando;

    trilhasCadastradas[index] = {
        trilha: form.trilha.value,
        data: form.data.value,
        hora: form.hora.value,
        ponto: form.ponto.value,
        vagas: form.vagas.value,
    };

    localStorage.setItem("eventos", JSON.stringify(trilhasCadastradas));
    indexEditando = null;
    renderizarTrilhas();
});


function abrirMinhasTrilhas() {
    abrirTela('btn-minhas-trilhas,conteiner-MinhasTrilhas')
    renderizarTrilhas()
}

function abrirMeuPerfil(){
    
}

function abrirBotaoPerfil() {
  const abrirBotaoPerfil = document.querySelectorAll("#perfil");
  abrirBotaoPerfil.forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("contPerfil").style.display = "block";
      document.getElementById("perfil-container").style.display = "block";
      mostrarDadosUsuario();
    });
  });
}
abrirBotaoPerfil();

function fecharBotaoPerfil() {
    const fecharBtn = document.querySelector(".fechar-perfil");
    fecharBtn.addEventListener("click", () => {
        document.getElementById("perfil-container").style.display = "none";
    });
}
fecharBotaoPerfil();

function mostrarDadosUsuario() {
    const visual = document.getElementById("perfil-visualizacao");
    const usuario = JSON.parse(localStorage.getItem("logado"));

    if (!usuario) {
        alert("Você precisa estar logado!");
        document.getElementById("perfil-container").style.display = "none";
        abrirLoginCadastro("contLogin");
        return;
    }

    visual.innerHTML = `
        <p><strong>Nome:</strong> ${usuario.nomeUsuario}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Sexo:</strong> ${usuario.sexo}</p>
        <p><strong>Telefone:</strong> ${usuario.telefone}</p>
        <p><strong>CPF:</strong> ${usuario.cpf}</p>
        <p><strong>Avaliação:</strong> ${usuario.avaliaçãoUser}</p>
    `;
}

document.getElementById("editar-perfil").addEventListener("click", () => {
    const usuario = JSON.parse(localStorage.getItem("logado"));
    if (!usuario) return;

    const form = document.forms["form-edicao"];
    form.nomeUsuario.value = usuario.nomeUsuario;
    form.email.value = usuario.email;
    form.telefone.value = usuario.telefone;
    form.sexo.value = usuario.sexo;

    document.getElementById("perfil-visualizacao").style.display = "none";
    document.getElementById("perfil-edicao").style.display = "block";
});

document.getElementById("cancelar-edicao").addEventListener("click", () => {
  document.getElementById("perfil-edicao").style.display = "none";
  document.getElementById("perfil-visualizacao").style.display = "block";
});

document.getElementById("form-edicao").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

    const usuarios = JSON.parse(localStorage.getItem("CadastroUser")) || [];
    let logado = JSON.parse(localStorage.getItem("logado"));
    const index = usuarios.findIndex(u => u.cpf === logado.cpf);

    if (index !== -1) {
        usuarios[index].nomeUsuario = form.nomeUsuario.value;
        usuarios[index].email = form.email.value;
        usuarios[index].telefone = form.telefone.value;
        usuarios[index].sexo = form.sexo.value;

        // atualiza o logado também
        localStorage.setItem("logado", JSON.stringify(usuarios[index]));
        localStorage.setItem("CadastroUser", JSON.stringify(usuarios));

        mostrarDadosUsuario();
        document.getElementById("perfil-edicao").style.display = "none";
        document.getElementById("perfil-visualizacao").style.display = "block";
    }
});

document.getElementById("excluir-perfil").addEventListener("click", () => {
    if (!confirm("Tem certeza que deseja excluir sua conta?")) return;

    let usuarios = JSON.parse(localStorage.getItem("CadastroUser")) || [];
    const usuarioLogado = JSON.parse(localStorage.getItem("logado"));

    usuarios = usuarios.filter(u => u.cpf !== usuarioLogado.cpf);

    localStorage.setItem("CadastroUser", JSON.stringify(usuarios));
    localStorage.removeItem("logado");

    alert("Conta excluída com sucesso.");
    location.reload(); // ou abrirLoginCadastro("contLogin")
});

function mostrarAlerta(mensagem) {
    const alerta = document.getElementById('meu-alerta');
    const texto = document.getElementById('alerta-texto');
    texto.textContent = mensagem;
    alerta.style.display = 'block';

    setTimeout(() => {
        alerta.style.display = 'none';
    }, 4000); // esconde após 4 segundos
}

function fecharAlerta() {
    document.getElementById('meu-alerta').style.display = 'none';
}

//Área reservada para receber as instruções do funcionamento das Trilhas
