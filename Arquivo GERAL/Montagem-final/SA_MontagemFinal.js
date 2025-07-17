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
    mostrarLiCompleto()
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
// -----------------------------------
// funcionamento da pagina

if (usuarioLogado()) {
    mostrarLiCompleto()
}

function mostrarLiCompleto() {
    document.getElementById("criarEventos").style.display = "flex"
    document.getElementById("fazerAvaliacao").style.display = "flex"
    document.getElementById("perfil").style.display = "flex"
    document.getElementById("Login").style.display = "flex"
    document.getElementById("btn-minhas-trilhas").style.display = "flex"

    //login sai 

    document.getElementById("Login").style.display = "none"

}
function esconderSection() {
    document.getElementById("Login").classList.remove("liNav")
    document.getElementById("Trilhas").classList.remove("liNav")
    document.getElementById("Eventos").classList.remove("liNav")
    document.getElementById("btn-minhas-trilhas").classList.remove("liNav")
    document.getElementById("criarEventos").classList.remove("liNav")
    document.getElementById("fazerAvaliacao").classList.remove("liNav")
    document.getElementById("perfil").classList.remove("liNav")

    document.querySelector(`.cont-fred`).style.display = "none"
    document.querySelector(`.conteiner-cadastro`).style.display = "none"
    document.querySelector(`.conteiner-login`).style.display = "none"
    document.querySelector(`.container-Evento`).style.display = "none"
    document.querySelector(`.conteiner-MinhasTrilhas`).style.display = "none"
    document.querySelector(`.conteiner-Avaliacao`).style.display = "none"
    document.querySelector(`.conteiner-perfil`).style.display = "none"


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

    //Fred
    document.querySelector(`.cont-map`).innerHTML =
        `<img src="Mapas/FloripaGeral.png">`
    //Fred

}
function usuarioLogado() {
    return JSON.parse(localStorage.getItem("logado"))
}

//funcionamento da pagina
// Frederico

const infsListaTrilhas = [
    {
        nome: `Trilha Norte 1`, pPartida: `Ponta A`, pChegada: `Ponto B`,
        regiao: `Norte`, cep: ``,
        distancia: `45Km`, tempo: '03hm30', relevo: `Irregular`, elevacao: `50m`,
        nvlTSite: `5`, nvlTUsuario: [5],
        img: `<img src="Icones/image.svg">`,
    },
    
    {
        nome: `Trilha Norte 2`, pPartida: ``, pChegada: ``,
        regiao: `Norte`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: `Trilha Central 1`, pPartida: ``, pChegada: ``,
        regiao: `Central`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: `Trilha Central 2`, pPartida: ``, pChegada: ``,
        regiao: `Central`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: `Trilha Leste 1`, pPartida: ``, pChegada: ``,
        regiao: `Leste`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: `Trilha Leste 2`, pPartida: ``, pChegada: ``,
        regiao: `Leste`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: `Trilha Sul 1`, pPartida: ``, pChegada: ``,
        regiao: `Sul`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
    },

    {
        nome: `Trilha Sul 2`, pPartida: ``, pChegada: ``,
        regiao: `Sul`, cep: ``,
        distancia: `Km`, tempo: 'hm', relevo: ``, elevacao: `m`,
        nvlTSite: ``, nvlTUsuario: [],
        img: `<img src="Icones/image.svg">`,
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
    document.querySelector('.cont-ListasTrilhas').innerHTML = ``
}
function limparDadosTrilhas() {
    document.querySelector('.cont-DadosTrilha-Inf').innerHTML = ``
    document.querySelector('.cont-DadosTrilha-Inf').innerHTML = ``
    document.querySelector('.DadosTrilha-coment').innerHTML = ``
    document.querySelector('.cont-bttn-CriarEvent-LogIn').innerHTML = ``
}
function limparMapa() {
    document.querySelector(`.cont-map`).innerHTML = ``
}
function mostrarListTrilhasReg(RegTrilha) {
    limparTrilhas()
    limparDadosTrilhas()
    limparMapa()

    let trilhasReg = RegTrilha
    let nomeRegiao

    if (trilhasReg === 'Floripa') {
        document.querySelector(`.cont-map`).innerHTML =
            `<img src="Mapas/FloripaGeral.png">`
    } else if (trilhasReg === 'Norte') {
        document.querySelector(`.cont-map`).innerHTML =
            `<img src="Mapas/FloripaNorte.png">`
    } else if (trilhasReg === 'Central') {
        document.querySelector(`.cont-map`).innerHTML =
            `<img src="Mapas/FloripaCentral.png">`
    } else if (trilhasReg === 'Leste') {
        document.querySelector(`.cont-map`).innerHTML =
            `<img src="Mapas/FloripaLeste.png">`
    } else if (trilhasReg === 'Sul') {
        document.querySelector(`.cont-map`).innerHTML =
            `<img src="Mapas/FloripaSul.png">`
    }

    nomeRegiao = infsListaTrilhas.filter(filtroRegTrilha => filtroRegTrilha.regiao === trilhasReg)
    let nomesTrilhas
    nomesTrilhas = document.querySelector('.cont-ListasTrilhas')
    for (const trilha of nomeRegiao) {
        nomesTrilhas.innerHTML +=
            `<div onclick="mostrarInfTrilha('${trilha.nome}')" class="divsBttnTrilha">
                <div class='divsBttnTrilha-nome'>
                    <span>${trilha.nome}</span>
                </div>
                <div class='divsBttnTrilha-foto'>
                    <span>${trilha.img}</span>
                </div>
            </div>`
    }
}
function mostrarInfTrilha(nomeTrilha) {
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if (logInOut()) {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
            `   <div class='dadosTrilha'>
                <img src="Icones/map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>
            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="Icones/map-pin-line.svg" class='iconsDadosTrilha'>
            </div>
            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/path.svg" class='iconsDadosTrilha'>
                <span>${dadosTrilha.distancia} / </span>
                <img src="Icones/timer.svg" class='iconsDadosTrilha'>
                <span> ${dadosTrilha.tempo}</span>
            </div>
            <div class='dadosTrilha'>
                <img src="Icones/person-simple-hike.svg" class='iconsDadosTrilha'>
                <span>Relevo: ${dadosTrilha.relevo}</span> 
                <span> / Elevação: ${dadosTrilha.elevacao}</span>
            </div>                    
        `
        document.querySelector('.DadosTrilha-coment').innerHTML =
            `Área destinada aos comentários sobre a trilha`

        document.querySelector('.cont-bttn-CriarEvent-LogIn').innerHTML =
            `<button class='bttn-CriarEvent-LogIn' onclick="CRIAREVENTO('${dadosTrilha.nome}')">Criar Evento</button>`

    } else {
        dadosTrilha = infsListaTrilhas.find(filtroNomeTrilha => filtroNomeTrilha.nome === trilhaNome)
        document.querySelector('.cont-DadosTrilha-Inf').innerHTML =
            `   <div class='dadosTrilha'>
                <img src="Icones/map-trifold.svg" class='iconsDadosTrilha'>
                <span>Trilha: ${dadosTrilha.nome}</span>
            </div>

            <div class='dadosTrilha'>
                <img src="Icones/map-pin.svg" class='iconsDadosTrilha'>
                <span>De: ${dadosTrilha.pPartida}</span>
            </div>

            <div class='dadosTrilha'>

                <span>Para: ${dadosTrilha.pChegada}</span>
                <img src="Icones/map-pin-line.svg" class='iconsDadosTrilha'>
            </div>

            <div class='dadosTrilha'>
                <span>Dificuldade:</span>
                <span>Indicada: ${dadosTrilha.nvlTSite} / Relatada: ${dadosTrilha.nvlTUsuario}</span>
            </div>

            <div class='dadosTrilha'>

            <span>Para mais informações: <a href="URL_do_link">login</a>
            </div>                   
        `
        document.querySelector('.DadosTrilha-coment').innerHTML =
            `Área destinada aos comentários sobre a trilha`
    }

}
function CRIAREVENTO(nomeTrilhaEvento) {
    let eventoTrilhaNome = nomeTrilhaEvento
    console.log(eventoTrilhaNome)
}

// Frederico

//Ronald


document.getElementById('eventoForm').addEventListener('submit', function (event) {
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

//Washington o bonito




//  const avaliacaoGrauDeDificuldade = []
//         const avalicaoTempoEstimado = []
//         // const avalicaoTipoDeRelevo = []

//         function avaTrilha() {
//             const avaliacaoTempo = document.getElementById("tempoEstimado").value
//             if (avaliacaoTempo.trim() === "") // Pega o primeiro elemento que satisfa a condição
//                 avalicaoTempoEstimado.push(avaliacaoTempo)

//             console.log(avaliacaoTempo)

//             const avaDificuldade = document.getElementById("grauDeDificuldade").value
//             if (avaDificuldade === "")
//                 avaliacaoGrauDeDificuldade.push(avaDificuldade)

//             console.log(avaDificuldade)
//             mostraTrilha()

//         }
//         function mostraTrilha() {
//             const ul = document.getElementById("mostraTrilha")
//             ul.innerHTML = ""


//             for (let mostra = 0; mostra < avalicaoTempoEstimado.length; mostra++) {
//                 const tempo = avalicaoTempoEstimado[mostra]
//                 const dificuldade = avaliacaoGrauDeDificuldade[mostra] || "N/A"

//                 const li = document.createElement("li")
//                 li.textContent = `${tempo} 
//                           ${dificuldade}`
//                 ul.appendChild(li)
//             }
//         }
//         const notaAmigo = []
//         const cometarioAmigo = []
//         const containerAva = []

//         function avalicaoAmigo() {

//             document.getElementById("containerAva").value
//             if (containerAva.length > 1) {
//                 containerAva.shift()
//             } else {
//                 alert("obrigado")
//             }
//             const avaAmigo = document.getElementById("notaAmigo").value
//             if (avaAmigo.trim() !== 0)
//                 notaAmigo.push(avaAmigo)
//             console.log(avaAmigo)

//             const cometAmigo = document.getElementById("cometarioAmigo").value
//             if (cometAmigo.trim() !== 0)
//                 cometarioAmigo.push(cometAmigo)
//             console.log(cometAmigo)

//             mostraAmigo()
//         }
//         function mostraAmigo() {
//             const ul = document.getElementById("mostraAmigo")
//             ul.innerHTML = ""


//             for (let mostra = 0; mostra < avalicaoTempoEstimado.length; mostra++) {
//                 const nota = notaAmigo[mostra]
//                 const comentario = cometarioAmigo[mostra] || "N/A"


//                 const li = document.createElement("li")
//                 li.textContent = `${nota}
//                           ${comentario} `
//                 ul.appendChild(li)
//             }
//         }

//Washington o bonito





// render inicial
renderizarTrilhas();




