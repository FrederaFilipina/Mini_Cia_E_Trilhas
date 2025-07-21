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
    AvaliaçaoDisponivel()
    mostrarLiCompleto()
    esconderSection()
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

        return "Masculino"

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
    AvaliaçaoDisponivel()
}
function mostrarAvaliação() {
    document.getElementById("fazerAvaliacao").style.display = "flex"
}
function mostrarLiCompleto() {
    document.getElementById("criarEventos").style.display = "flex"

    document.getElementById("perfil").style.display = "flex"
    document.getElementById("Login").style.display = "flex"
    document.getElementById("btn-minhas-trilhas").style.display = "flex"

    //login sai 

    document.getElementById("Login").style.display = "none"

}

function esconderLi() {
    document.getElementById("criarEventos").style.display = "none"

    document.getElementById("perfil").style.display = "none"
    document.getElementById("btn-minhas-trilhas").style.display = "none"
    document.getElementById("fazerAvaliacao").style.display = "none"

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
    document.querySelector(`.cont-eventos`).style.display = "none"


}
function abrirLoginCadastro(cont) {
    document.getElementById("contCadast").style.display = "none"
    document.getElementById("contLogin").style.display = "none"
    document.getElementById("infoUser").innerHTML = ""
    document.getElementById("infoUserLogin").innerHTML = ""

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
        nome: `Trilha do Morro do Rapa`, pPartida: `Lagoinha do Norte`, pChegada: `Praia Brava`,
        regiao: `Norte`, cep: ``,
        distancia: `2.8Km`, tempo: '01h30m', relevo: `Irregular`, elevacao: `167m`,
        nvlTSite: `2`, nvlTUsuario: [2],
        img: `<img src="ImgTrilhas/morroDoRapa.jpg">`,
    },

    {
        nome: `Trilha das Feiticeiras (Caminho de Santiago de Floripa)`, pPartida: `Praia dos Ingleses`, pChegada: `Praia Brava`,
        regiao: `Norte`, cep: ``,
        distancia: `2.62Km`, tempo: '1h30m', relevo: `Irregular`, elevacao: `100m`,
        nvlTSite: `3`, nvlTUsuario: [3],
        img: `<img src="ImgTrilhas/trilhaDasFeiticeiras.jpg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: `Trilha do Poção`, pPartida: `final da Rua Sebastião Laurentino da Silva`, pChegada: `Cachoeira do Poção`,
        regiao: `Central`, cep: ``,
        distancia: `1.4Km`, tempo: '00h30m', relevo: `Plana`, elevacao: `47m`,
        nvlTSite: `1`, nvlTUsuario: [1],
        img: `<img src="ImgTrilhas/trilhaDoPocao.jpg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: `Trilha Piscinas Naturais Barra da Lagoa`, pPartida: `Ponte Pênsil da Barra da Lagoa`, pChegada: `Piscinas Naturais`,
        regiao: `Leste`, cep: ``,
        distancia: `1.24Km`, tempo: '00h30m', relevo: `Irregular`, elevacao: `32m`,
        nvlTSite: `1`, nvlTUsuario: [1],
        img: `<img src="ImgTrilhas/piscinasNaturais.jpg">`,
    },

    {
        nome: `Trilha do Farol da Barra da Lagoa`, pPartida: `Ponte Pênsil da Barra da Lagoa`, pChegada: `Farol da Barra`,
        regiao: `Leste`, cep: ``,
        distancia: `930m`, tempo: '00h30m', relevo: ``, elevacao: `109m`,
        nvlTSite: `3`, nvlTUsuario: [3],
        img: `<img src="ImgTrilhas/farolBarra.jpg">`,
    },

    //-----------------------------------------------------------------------------

    {
        nome: `Trilha da Lagoinha do Leste (via Matadeiro)`, pPartida: `final da praia do Matadeiro`, pChegada: `Praia da Lagoinha do Leste`,
        regiao: `Sul`, cep: ``,
        distancia: `5Km`, tempo: '03h00m', relevo: `Irregular`, elevacao: `m`,
        nvlTSite: `4`, nvlTUsuario: [4],
        img: `<img src="ImgTrilhas/lagoinhaDoLesteMatadeiro.jpg">`,
    },

    {
        nome: `Trilha da Lagoinha do Leste (via Pantano do Sul)`, pPartida: ``, pChegada: `Praia da Lagoinha do Leste`,
        regiao: `Sul`, cep: ``,
        distancia: `3Km`, tempo: '01h45m', relevo: `Irregular`, elevacao: `216m`,
        nvlTSite: `5`, nvlTUsuario: [5],
        img: `<img src="ImgTrilhas/lagoinhaDoLestePantano.jpg">`,
    },
]
localStorage.setItem('ListagemTrilhas', JSON.stringify(infsListaTrilhas))

function limparTrilhas() {
    document.querySelector('.cont-ListasTrilhas').innerHTML = ``
}
function limparDadosTrilhas() {
    document.querySelector('.cont-DadosTrilha-Inf').innerHTML = ``
    document.querySelector('.cont-DadosTrilha-Inf').innerHTML = ``
    document.querySelector('.conts-DadosTrilha-comentarios').innerHTML = ``
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
                    ${trilha.img}
                </div>
            </div>`
    }
}
function mostrarInfTrilha(nomeTrilha) {
    let trilhaNome = nomeTrilha
    let dadosTrilha

    if (usuarioLogado()) {
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
        // document.querySelector('.conts-DadosTrilha-comentarios').innerHTML =
        //     `<div class="DadosTrilha-comentarios">
        // <span> Área destinada aos comentários</span>
        // </div>`

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

            <span>Para mais informações, clique <a href="#" onclick="abrirTela('Login,conteiner-login')" id="Login" class="linkLoCa" id="LinkCadastro">aqui</a>!
            </div>                   
        `
        // document.querySelector('.conts-DadosTrilha-comentarios').innerHTML =
        //     `<div class="DadosTrilha-comentarios">
        // <span> Área destinada aos comentários</span>
        // </div>`
    }

}
function CRIAREVENTO(nomeTrilhaEvento) {
    abrirTela('criarEventos,container-Evento')
    preencherSelectTrilhas()

    setTimeout(() => {
        let seletor = document.getElementById("select-trilha")

        seletor.value = nomeTrilhaEvento

    }, 100)

}

// Frederico

//Ronald


document.getElementById('eventoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let usuarioLog = usuarioLogado();


    if (!usuarioLog || !usuarioLog.nomeCompleto) {
        document.getElementById('mensagem').innerText = "Usuário não está logado.";
        return;
    }

    const trilha = document.getElementById('select-trilha').value.trim();
    const data = document.getElementById('data').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const ponto = document.getElementById('ponto').value.trim();
    const vagasStr = document.getElementById('vagas').value.trim();
    const vagas = parseInt(vagasStr, 10);


    if (!trilha || !data || !hora || !ponto || !vagasStr || isNaN(vagas) || vagas <= 0) {
        document.getElementById('mensagem').innerText = "Preencha todos os campos corretamente.";
        return;
    }

    const nome = usuarioLog.nomeCompleto.trim();
    const idade = calcularIdade(usuarioLog.dataNacimento);
    const sexo = usuarioLog.sexo;
    const cpf = usuarioLog.cpf;
    const status = true
    const usuarioAvaliador = 0

    let eventos = JSON.parse(localStorage.getItem('eventos')) || [];


    const jaCriou = eventos.some(e => e.organizador.cpf === cpf);
    if (jaCriou) {
        document.getElementById('mensagem').innerText = "Você já criou um evento.";
        return;
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataSelecionada = new Date(data + 'T00:00');

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
        status,
        organizador: { nome, idade, sexo, cpf },
        participantes: [{ nome, idade, sexo, cpf, usuarioAvaliador }],

    };

    eventos.push(eventoCriado);
    localStorage.setItem('eventos', JSON.stringify(eventos));

    document.getElementById('mensagem').innerText = "Evento cadastrado com sucesso!";
    this.reset();
    listarEventos();

});


function ListarEventosSemLogin() {
    const lista = document.getElementById('listaEventos');
    lista.innerHTML = '';
    let eventos = JSON.parse(localStorage.getItem('eventos')) || []

    if (eventos.length === 0) {
        lista.innerHTML = '<h3>Nenhum evento disponivel</h3>';
        return;
    }


    eventos.forEach((e, i) => {
        const div = document.createElement('div');
        div.classList.add("cardEventosOnline")

        div.innerHTML = `
            <h3>Evento ${i + 1}</h3>
            <p>Trilha: ${e.trilha}</p>
            <p>Data: ${e.data} às ${e.hora}</p>
            <p>Ponto de Encontro: ${e.ponto}</p>
            <p>Vagas: ${e.vagas}</p>
            <p>Organizador: ${e.organizador.nome} (${e.organizador.idade} anos, ${e.organizador.sexo})</p>
            <p>CPF: ${e.organizador.cpf}</p>
            <p>Participantes: ${e.participantes.length}</p>
            
        `;
        lista.appendChild(div);
    })



}

function listarEventos() {
    const usuarioLog = usuarioLogado();
    const lista = document.getElementById('listaEventos');
    lista.innerHTML = '';
    let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    if (usuarioLog === null) {
        ListarEventosSemLogin()
        return
    }


    if (eventos.length === 0) {
        lista.innerHTML = '<h3>Nenhum evento disponivel</h3>';
        return;
    }

    eventos.forEach((e, i) => {


        console.log(!e.participantes.some(p => p.cpf === usuarioLog.cpf));

        if (!e.participantes.some(p => p.cpf === usuarioLog.cpf)) {
            const div = document.createElement('div');
            div.classList.add("cardEventosOnline")
            div.innerHTML = `
            <h3>Evento ${i + 1}</h3>
            <p>Trilha: ${e.trilha}</p>
            <p>Data: ${e.data} às ${e.hora}</p>
            <p>Ponto de Encontro: ${e.ponto}</p>
            <p>Vagas: ${e.vagas}</p>
            <p>Organizador: ${e.organizador.nome} (${e.organizador.idade} anos, ${e.organizador.sexo})</p>
            <p>CPF: ${e.organizador.cpf}</p>
            <p>Participantes: ${e.participantes.length}</p>
            
        `;

            const botao = document.createElement('button');
            botao.innerText = 'Participar';

            botao.addEventListener('click', () => {


                if (e.participantes.some(p => p.cpf === usuarioLog.cpf)) {
                    alert('Você já está participando deste evento.');
                    return;
                }


                if (e.participantes.length >= e.vagas) {
                    alert('Não há vagas disponíveis.');
                    return;
                }

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
        } else {
            lista.innerHTML = '<h3>Nenhum evento disponivel</h3>';
        }
    });
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

function preencherSelectTrilhas() {
    const selectTrilha = document.getElementById('select-trilha');
    console.log(selectTrilha);

    if (!selectTrilha) return;

    selectTrilha.innerHTML = '';

    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.text = '-- Selecione a Trilha --';
    selectTrilha.appendChild(optionDefault);

    const trilhas = JSON.parse(localStorage.getItem('ListagemTrilhas')) || [];



    trilhas.forEach(trilha => {
        const option = document.createElement('option');
        option.value = trilha.nome;
        option.text = trilha.nome;
        selectTrilha.appendChild(option);
    });
}

//Área reservada para receber as instruções do funcionamento das Trilhas






// jonny

const lista = document.getElementById("trilhas");
const trilhasView = document.getElementById("minhas-trilhas-view");
const botaoMinhasTrilhas = document.getElementById("btn-minhas-trilhas");

let indexEditando = null;

function renderizarTrilhas() {
    const atualizarClicando = JSON.parse(localStorage.getItem("eventos")) || [];
    const lista = document.getElementById("trilhas");
    const usuario = usuarioLogado()

    lista.innerHTML = "";
    if (!usuario) {
        lista.innerHTML = "<p>Faça login para ver suas trilhas criadas.</p>";
        return;
    }


    const trilhasDoUsuarioLogado = atualizarClicando.filter(evento => {
        return evento.organizador && evento.organizador.cpf === usuario.cpf;
    });

    if (trilhasDoUsuarioLogado.length === 0) {
        lista.innerHTML = "<p>Você não criou nenhuma trilha ainda.</p>";
    }

    trilhasDoUsuarioLogado.forEach((trilha, index) => {
        const divTrilha = document.createElement("div");
        divTrilha.classList.add("trilha-item");


        if (indexEditando === index) {
            divTrilha.innerHTML = `
        <form class="form-edicao">
          <div class="form-group"<label>Trilha: <input type="text" name="trilha" value="${trilha.trilha}"  required disabled/></label><br></div>
          <div class="form-group"<label>Data: <input type="date" name="data" value="${trilha.data}" id="data${index}"/></label><br></div>
          <div class="form-group"<label>Hora: <input type="time" name="hora" value="${trilha.hora}" id="hora${index}"/></label><br></div>
          <div class="form-group"<label>Ponto: <input type="text" name="ponto" value="${trilha.ponto}" id="ponto${index}" /></label><br></div>
          <div class="form-group"<label>Vagas: <input type="number" name="vagas" value="${trilha.vagas}" id="vagas${index}" /></label><br></div>
          <button type="submit" class="salvar-edicao">Salvar</button>
          <button class="excluir-trilha" onclick="excluirEvento()">Excluir</button>
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
        <div class="Botoes-editarExcluir">
        <button class="editar-btn" data-index="${index}">Editar</button>
        </div>

      `;
        }

        lista.appendChild(divTrilha);


    });

    const trilhasDoUsuarioParticipando = atualizarClicando.filter(evento => {
        if (evento.organizador.cpf !== usuario.cpf) {
            return evento.participantes.some(usuarioo => usuarioo.cpf === usuario.cpf)
        }

    });


    trilhasDoUsuarioParticipando.forEach((trilha) => {
        const divTrilha = document.createElement("div");
        divTrilha.classList.add("trilha-item");
        divTrilha.innerHTML = `
        <p><strong>Trilha:</strong> ${trilha.trilha}</p>
        <p><strong>Data:</strong> ${trilha.data}</p>
        <p><strong>Horário:</strong> ${trilha.hora}</p>
        <p><strong>Ponto de encontro:</strong> ${trilha.ponto}</p>
        <p><strong>Vagas disponíveis:</strong> ${trilha.vagas}</p>
        </div>`

        lista.appendChild(divTrilha);

    })

}

function excluirEvento() {
    let excluirEvento = usuarioLogado()
    let todasTrilhas = JSON.parse(localStorage.getItem("eventos"))

    let index = todasTrilhas.findIndex(evento => evento.organizador.cpf === excluirEvento.cpf)
    console.log(index);

}

botaoMinhasTrilhas.addEventListener("click", () => {
    trilhasView.style.display = "flex";
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

    if (event.target.classList.contains("excluir-trilha")) {
        event.preventDefault();
        const index = parseInt(event.target.getAttribute("data-index"));
        console.log(index);

        if (confirm("Tem certeza que deseja excluir essa trilha?")) {
            let excluirEvento = usuarioLogado()
            let todasTrilhas = JSON.parse(localStorage.getItem("eventos"))

            let indexx = todasTrilhas.findIndex(evento => evento.organizador.cpf === excluirEvento.cpf)

            console.log(indexx);
        
                if (indexx !== -1) {
                    todasTrilhas.splice(indexx, 1);
                    localStorage.setItem("eventos", JSON.stringify(todasTrilhas));
                    renderizarTrilhas();
                    indexEditando = null;
                }
            }
        }

if (event.target.classList.contains("salvar-edicao")) {
    event.preventDefault();
    const index = indexEditando;
    let usuariolog = usuarioLogado()
    const trilhaOriginal = JSON.parse(localStorage.getItem("eventos"))

    trilhaOriginal.forEach(evento => {
        if (evento.organizador.cpf === usuariolog.cpf) {
          
            evento.data = document.getElementById(`data${index}`).value
            evento.hora = document.getElementById(`hora${index}`).value
            evento.ponto = document.getElementById(`ponto${index}`).value
            evento.vagas = document.getElementById(`vagas${index}`).value
        }
    })


    localStorage.setItem("eventos", JSON.stringify(trilhaOriginal));
    indexEditando = null;
    renderizarTrilhas();


}

    });

// lista.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const index = indexEditando;
//     let usuariolog = usuarioLogado()
//     const trilhaOriginal = JSON.parse(localStorage.getItem("eventos"))

//     trilhaOriginal.forEach(evento => {
//         if (evento.organizador.cpf === usuariolog.cpf) {

//             evento.trilha = form.trilha.value
//             evento.data = form.data.value
//             evento.hora = form.hora.value
//             evento.ponto = form.hora.value
//             evento.vagas = form.vagas.value
//         }
//     })


//     localStorage.setItem("eventos", JSON.stringify(trilhasCadastradas));
//     indexEditando = null;
//     renderizarTrilhas();
// })



function abrirMinhasTrilhas() {
    abrirTela('btn-minhas-trilhas,conteiner-MinhasTrilhas')
    renderizarTrilhas()
}

// ---------PERFIL----------

function abrirMeuPerfil() {
    abrirTela('perfil,conteiner-perfil');
}

function abrirBotaoPerfil() {
    const abrirBotaoPerfil = document.querySelectorAll("#perfil");
    abrirBotaoPerfil.forEach((button) => {
        button.addEventListener("click", () => {
            document.getElementById("contPerfil").style.display = "flex";
            document.getElementById("perfil-container").style.display = "flex";
            mostrarDadosUsuario();
        });
    });
}
abrirBotaoPerfil();

function deslogarUsuario() {
    localStorage.removeItem("logado");
    alert('Você foi deslogado com sucesso!');
    esconderSection();
    limparInput();
    esconderLi()
    location.reload()

}


function ativarBotaoDeslogar() {
    const btnDeslogar = document.getElementById("deslogar-perfil");
    if (btnDeslogar) {
        btnDeslogar.addEventListener("click", deslogarUsuario);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ativarBotaoDeslogar();

    if (usuarioLogado()) {
        mostrarLiCompleto();
    } else {
        esconderSection();
        abrirLoginCadastro("contLogin");
    }
});


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
    document.getElementById("perfil-edicao").style.display = "flex";
    document.getElementById("editar-perfil").style.display = "none";
});

document.getElementById("cancelar-edicao").addEventListener("click", () => {
    document.getElementById("perfil-edicao").style.display = "none";
    document.getElementById("perfil-visualizacao").style.display = "flex";
    document.getElementById("editar-perfil").style.display = "block";

    document.getElementById("infoNomeUsuarioEdicao").innerText = ""
    document.getElementById("infoEmailUsuarioEdicao").innerText = ""
    document.getElementById("infoTelefoneUsuarioEdicao").innerText = ""
});

document.getElementById("form-edicao").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

    const usuarios = JSON.parse(localStorage.getItem("CadastroUser")) || [];
    let logado = JSON.parse(localStorage.getItem("logado"));
    const index = usuarios.findIndex(u => u.cpf === logado.cpf);


    if (index !== -1) {
        let comparandoUsuario = usuarios[index].nomeUsuario === form.nomeUsuario.value ? false : true;
        let comparandoEmail = usuarios[index].email === form.email.value ? false : true;
        let comparandotelefone = usuarios[index].telefone === form.telefone.value ? false : true;

        let nomeUsuario = form.nomeUsuario.value
        let emailUsuario = form.email.value
        let telefoneUsuario = form.telefone.value

        if (comparandoUsuario) {
            if (verificarUsuario(nomeUsuario)) {
                document.getElementById("infoNomeUsuarioEdicao").innerText = "Este usuario já esta sendo utilizado"
                return
            }
        }
        if (comparandoEmail) {
            if (verificarEmail(emailUsuario)) {
                document.getElementById("infoEmailUsuarioEdicao").innerText = "Este Email já esta sendo utilizado"
                return
            }
        }
        if (comparandotelefone) {
            if (verificarTelefone(telefoneUsuario)) {
                document.getElementById("infoTelefoneUsuarioEdicao").innerText = "Este telefone já esta sendo utilizado"
                return
            }
        }

        usuarios[index].nomeUsuario = nomeUsuario
        usuarios[index].email = emailUsuario
        usuarios[index].telefone = telefoneUsuario

        document.getElementById("infoNomeUsuarioEdicao").innerText = ""
        document.getElementById("infoEmailUsuarioEdicao").innerText = ""
        document.getElementById("infoTelefoneUsuarioEdicao").innerText = ""


        localStorage.setItem("logado", JSON.stringify(usuarios[index]));
        localStorage.setItem("CadastroUser", JSON.stringify(usuarios));

        mostrarDadosUsuario();
        document.getElementById("perfil-edicao").style.display = "none";
        document.getElementById("perfil-visualizacao").style.display = "flex";
        document.getElementById("editar-perfil").style.display = "flex";
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
    location.reload();
});


//Área reservada para receber as instruções do funcionamento das Trilhas

//Washington o bonito
function avaTrilha() {
    const avaliacaoTempo = document.getElementById("tempoEstimado").value
    if (avaliacaoTempo.trim() === "") // Pega o primeiro elemento que satisfa a condição
        avalicaoTempoEstimado.push(avaliacaoTempo)
    localStorage.setItem("ava-tempoEstimado", JSON.stringify(avaliacaoTempo))

    console.log(avaliacaoTempo)

    const avaDificuldade = document.getElementById("grauDeDificuldade").value
    if (avaDificuldade === "")
        avaliacaoGrauDeDificuldade.push(avaDificuldade)
    localStorage.setItem("ava-dificuldade", JSON.stringify(avaDificuldade))

    console.log(avaDificuldade)
    mostraTrilha()

}
function mostraTrilha() {
    const ul = document.getElementById("mostraTrilha")
    ul.innerHTML = ""


    for (let mostra = 0; mostra < avalicaoTempoEstimado.length; mostra++) {
        const tempo = avalicaoTempoEstimado[mostra]
        const dificuldade = avaliacaoGrauDeDificuldade[mostra] || "N/A"

        const li = document.createElement("li")
        li.textContent = `${tempo} 
                  ${dificuldade} `
        ul.appendChild(li)
    }

}
const notaAmigo = []
const cometarioAmigo = []
const containerAva = []

function AvaliaçaoDisponivel() {
    let eventos = JSON.parse(localStorage.getItem("eventos")) || []
    let usuarioLoga = usuarioLogado()


    eventos.forEach(evento => {
        evento.participantes.forEach(usuario => {
            if (usuario.cpf === usuarioLoga.cpf && evento.status === false) {

                mostrarAvaliação()
            }

        })

    })
}




function avalicaoAmigo() {
    let usuarioLogado = JSON.parse(localStorage.getItem("logado"))
    let eventos = JSON.parse(localStorage.getItem("eventos"))
    let nomeAvaliando = document.getElementById("nomeAmigo")


    let eventoUsuario = eventos.filter(evento => evento.participantes.some(usuario => usuario.cpf === usuarioLogado.cpf))

    let usuarioAvaliador = eventoUsuario[0].participantes.find(usuario => {

        if (usuario.cpf === usuarioLogado.cpf)
            return usuario
    })


    if (usuarioAvaliador.avaliando !== undefined) {

        if (usuarioAvaliador.avaliando <= eventoUsuario[0].participantes.length - 1) {
            console.log(eventoUsuario[0].participantes);


            if (eventoUsuario[0].participantes[usuarioAvaliador.avaliando].cpf !== usuarioAvaliador.cpf) {

                nomeAvaliando.innerText = `${eventoUsuario[0].participantes[usuarioAvaliador.avaliando].nome} `
                console.log(eventoUsuario[0].participantes[usuarioAvaliador.avaliando]);

            } else {
                usuarioAvaliador.avaliando++
                console.log(eventos);
                localStorage.setItem("eventos", JSON.stringify(eventos))

                avalicaoAmigo()

            }


        } else document.getElementById("containerAva").style.display = "none"


    } else {





    }

}
function AvaliandoAmigo() {

    let usuarioLogado = JSON.parse(localStorage.getItem("logado"))
    let eventos = JSON.parse(localStorage.getItem("eventos"))
    let valor = document.getElementById("notaAmigo").value

    if (valor == 0) {
        return alert("Escolha uma Opção para avaliar")
    }


    let eventoUsuario = eventos.filter(evento => evento.participantes.some(usuario => usuario.cpf === usuarioLogado.cpf))
    let usuarioAvaliador = eventoUsuario[0].participantes.find(usuario => {

        if (usuario.cpf === usuarioLogado.cpf)
            return usuario
    })


    cadastroUsuarios.forEach(usuario => {

        if (usuario.cpf === usuarioAvaliador.cpf) {
            usuario.avaliações.push(valor)
            usuarioAvaliador.avaliando++
            salvarBancoDados()
            localStorage.setItem("eventos", JSON.stringify(eventos))
        }

    })

    console.log(cadastroUsuarios);

}

function mostraAmigo() {
    const ul = document.getElementById("mostraAmigo")
    ul.innerHTML = ""


    for (let mostra = 0; mostra < avalicaoTempoEstimado.length; mostra++) {
        const nota = notaAmigo[mostra]
        const comentario = cometarioAmigo[mostra] || "N/A"


        const li = document.createElement("li")
        li.textContent = `${nota}
                  ${comentario} `
        ul.appendChild(li)
    }
}
//Washington o bonito





// render inicial





