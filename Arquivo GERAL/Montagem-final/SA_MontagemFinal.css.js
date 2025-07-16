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
    alert("logado")
    mostrarCriarTrilha()
}
//display flex/none

//-----------------------------------//

function limitarDataCadastroData() {

    const inuputData = document.getElementById("dataNacimento")

    const idadeMinima = 18
    const dataAtual = new Date()

    const idadeAnoLimite = dataAtual.getFullYear() - idadeMinima

    const mesAtual = dataAtual.getMonth() - 1

    const idadeMesLimite = mesAtual >= 10 ? mesAtual : `0${mesAtual}`

    const diaAtual = dataAtual.getDate()
    console.log("aqui é o dia atual " + diaAtual);


    const idadeDiaLimite = diaAtual >= 10 ? diaAtual : `0${diaAtual}`


    let dataLimiteCadastro = `${idadeAnoLimite}-${idadeMesLimite}-${idadeDiaLimite}`

    console.log(dataLimiteCadastro);

    inuputData.setAttribute("max", dataLimiteCadastro)

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
        console.log(cadastroUsuarios)
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



    } else infoUserLogin.innerHTML = "*Senha incorreta"

}
//-----------------------------------//

//funcionamento da pagina

function esconderSection() {
    document.getElementById("Login").classList.remove("liNav")
    document.getElementById("Trilhas").classList.remove("liNav")
    document.getElementById("Eventos").classList.remove("liNav")
    document.getElementById("btn-minhas-trilhas").classList.remove("liNav")
    document.getElementById("criarEventos").classList.remove("liNav")

    document.querySelector(`.cont-fred`).style.display = "none"
    document.querySelector(`.conteiner-cadastro`).style.display = "none"
    document.querySelector(`.conteiner-login`).style.display = "none"
    document.querySelector(`.container-Evento`).style.display = "none"
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
    document.getElementById(cont[0]).classList.add("liNav")
    console.log(cont[1]);

    document.querySelector(`.${cont[1]}`).style.display = "flex"

}
function usuarioLogado() {
    return JSON.parse(localStorage.getItem("logado"))
}

//funcionamento da pagina

// Frederico

const infsListaTrilhas = [
    {
        nome: 'Caminho dos Naufragados', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: `Irregular`, elevacao: `15m`,
        nvlTSite: `5`, nvlTUsuario: [4],
        img: `<img src="image.svg">`,
    },

    {
        nome: 'Lagoinha do Leste (Praia)', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="IMG-20180523-WA0012.jpg">`
    },
        {
        nome: 'Lagoinha do Leste (Morro da Coroa)', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'Piscinas Naturais da Barra da Lagoa', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },
        {
        nome: 'TrilhaN5', pPartida: `Ponto A`, pChegada: `Ponto B`,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaN6', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaN7', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaN8', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaN', pPartida: ``, pChegada: ``,
        regiao: 'Norte', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaC1', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaC2', pPartida: ``, pChegada: ``,
        regiao: 'Central', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaL1', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaL2', pPartida: ``, pChegada: ``,
        regiao: 'Leste', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    //-----------------------------------------------------------------------------

    {
        nome: 'TrilhaS1', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },

    {
        nome: 'TrilhaS2', pPartida: ``, pChegada: ``,
        regiao: 'Sul', cep: ``,
        distancia: '10Km', tempo: '1h00', relevo: ``, elevacao: ``,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="image.svg">`
    },
]
localStorage.setItem('ListagemTrilhas', JSON.stringify(infsListaTrilhas))
function logInOut() {   
    /*let usuario = localStorage.getItem("LogIN")
    if(usuario != undefined){
        return true
    }
    else {
        return false
    }*/
    return true
}
function limparTrilhas() {
    let limparListTrilhas = document.querySelector('.cont-ListasTrilhas')
    limparListTrilhas.innerHTML = ``
}
function limparDadosTrilhas() {
    let limparDadosTrilhas = document.querySelector('.cont-DadosTrilha-Inf')
    limparDadosTrilhas.innerHTML = ``
}
function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()
    limparDadosTrilhas()

    let trilhasReg = RegTrilha
    let nomeRegiao
    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    
    let nomesTrilhas
    nomesTrilhas =  document.querySelector('.cont-ListasTrilhas')
    for (const trilha of nomeRegiao) {
            nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="divsBttnTrilha">
                <p>
                    ${trilha.nome}
                </p>
            </div>`
        }
    
}

function mostrarInfTrilha(nomeTrilha) {
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if(logInOut()){
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
        `   <div class='dadosTrilha'>
                <img src="map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>
            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="map-pin-line.svg" class='iconsDadosTrilha'>
            </div>
            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="path.svg" class='iconsDadosTrilha'>
                <span>${dadosTrilha.distancia} / </span>
                <img src="timer.svg" class='iconsDadosTrilha'>
                <span> ${dadosTrilha.tempo}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="person-simple-hike.svg" class='iconsDadosTrilha'>
                <span>Relevo: ${dadosTrilha.relevo}</span> 
                <span> / Elevação: ${dadosTrilha.elevacao}</span>
            </div>                    
        `
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-coment').innerHTML =
        `Área destinada aos comentários sobre a trilha`
        
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-fotos').innerHTML =
        `${dadosTrilha.img}`
        
        document.querySelector('.cont-bttn-CriarEvent-LogIn').innerHTML =
        `<button class='bttn-CriarEvent-LogIn' onclick="CRIAREVENTO('${dadosTrilha.nome}')">Criar Evento</button>`

    } else{
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
        `   <div class='dadosTrilha'>
                <img src="map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>
            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="map-pin-line.svg" class='iconsDadosTrilha'>
            </div>
            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>
            <div class='dadosTrilha'>
            <span>Para mais informações: <a href="URL_do_link">login</a>
            </div>                   
        `
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-coment').innerHTML =
        `Área destinada aos comentários sobre a trilha`
        
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.DadosTrilha-fotos').innerHTML =
        `${dadosTrilha.img}`
    }

}
function CRIAREVENTO(nomeTrilhaEvento){
    let eventoTrilhaNome = nomeTrilhaEvento
    console.log(eventoTrilhaNome)
}
// Frederico

//Ronald
 
function mostrarCriarTrilha() {
    document.getElementById("criarEventos").style.display = "flex"
}
if (usuarioLogado()) {
    mostrarCriarTrilha()
}

document.getElementById('eventoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let usuarioLog = usuarioLogado()
    const trilha = document.getElementById('trilha').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const ponto = document.getElementById('ponto').value;
    const vagas = parseInt(document.getElementById('vagas').value);

    const nome = usuarioLog.nomeCompleto.trim();
    const idade = calcularIdade(usuarioLog.dataNacimento);
    const sexo = usuarioLog.sexo;
    const cpf = usuarioLog.cpf;

    let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    const jaCriou = eventos.some(e => e.organizador.cpf === cpf);
    if (jaCriou) {
        document.getElementById('mensagem').innerText = "Você já criou um evento.";
        return;
    }

    const hoje = new Date();
    const dataSelecionada = new Date(data + 'T00:00');
    hoje.setHours(0, 0, 0, 0);

    if (dataSelecionada < hoje) {
        document.getElementById('mensagem').innerText = "Data não pode ser retroativa.";
        return;
    }

    const eventoCriado = {
        trilha,
        data,
        hora,
        ponto,
        vagas,
        organizador: { nome, idade, sexo, cpf },
        participantes: [{ nome, idade, sexo, cpf }],
        soMulheres: sexo === "Feminino"
    };

    eventos.push(eventoCriado);
    localStorage.setItem('eventos', JSON.stringify(eventos));

    document.getElementById('mensagem').innerText = "Evento cadastrado com sucesso!";
    this.reset();
    listarEventos();
    preencherCamposUsuario();
});

function listarEventos() {
    const usuarioLog = usuarioLogado()
    const lista = document.getElementById('listaEventos');
    lista.innerHTML = '';
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    if (eventos.length === 0) {
        lista.innerHTML = '<p>Nenhum evento cadastrado.</p>';
        return;
    }

    const jaParticipa = eventos.some(e =>
        e.participantes.some(p => p.cpf === usuarioLog.cpf)
    );

    eventos.forEach((e, i) => {
        const div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.style.margin = '10px 0';
        div.style.padding = '10px';

        div.innerHTML = `
            <strong>Evento ${i + 1}</strong><br>
            Trilha: ${e.trilha}<br>
            Data: ${e.data} às ${e.hora}<br>
            Ponto de Encontro: ${e.ponto}<br>
            Vagas: ${e.vagas}<br>
            Organizador: ${e.organizador.nome} (${e.organizador.idade} anos, ${e.organizador.sexo})<br>
            CPF: ${e.organizador.cpf}<br>
            Participantes: ${e.participantes.length}<br>
            ${e.soMulheres ? '<strong>Evento exclusivo para mulheres</strong><br>' : ''}
        `;

        
        const botao = document.createElement('button');
        botao.innerText = 'Participar';
        botao.disabled = jaParticipa || e.participantes.length >= e.vagas || (e.soMulheres && usuarioLog.sexo !== "Feminino");

        botao.addEventListener('click', () => {
            e.participantes.push({
                nome: usuarioLog.nomeCompleto,
                idade: calcularIdade(usuarioLog.dataNacimento),
                sexo: usuarioLog.sexo,
                cpf: usuarioLog.cpf
            });
            localStorage.setItem('eventos', JSON.stringify(eventos));
            listarEventos();
        });

        div.appendChild(botao);
        lista.appendChild(div);
    });
}

function preencherCamposUsuario() {
    let usuarioLog = usuarioLogado()
    document.getElementById('nome').value = usuarioLog.nomeCompleto;
    document.getElementById('idade').value = calcularIdade(usuarioLog.dataNacimento);
    document.getElementById('sexo').value = usuarioLog.sexo;

    document.getElementById('nome').readOnly = true;
    document.getElementById('idade').readOnly = true;
    document.getElementById('sexo').disabled = true;
}

function calcularIdade(dataNasc) {
    const hoje = new Date();
    const nascimento = new Date(dataNasc);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}




//Área reservada para receber as instruções do funcionamento das Trilhas


// jonny


const lista = document.getElementById("trilhas");
const trilhasView = document.getElementById("minhas-trilhas-view");
const botaoMinhasTrilhas = document.getElementById("btn-minhas-trilhas");

let indexEditando = null;

function renderizarTrilhas() {
    const atualizarClicando = JSON.parse(localStorage.getItem("eventos")) || [];
  lista.innerHTML = "";

  atualizarClicando.forEach((trilha, index) => {
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

// render inicial
renderizarTrilhas();




