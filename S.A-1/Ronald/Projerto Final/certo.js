// evento.js atualizado

let cadastroUsuarios = JSON.parse(localStorage.getItem("CadastroUser")) || [];
let usuarioLogado = JSON.parse(localStorage.getItem("logado"))

if (!usuarioLogado) {
    alert("Você precisa estar logado para criar um evento.");
    window.location.href = "login.html";
}

document.getElementById('eventoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const trilha = document.getElementById('trilha').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const ponto = document.getElementById('ponto').value;
    const vagas = parseInt(document.getElementById('vagas').value);

    const nome = usuarioLogado.nomeCompleto.trim();
    const idade = calcularIdade(usuarioLogado.dataNacimento);
    const sexo = usuarioLogado.sexo;
    const cpf = usuarioLogado.cpf;

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
    const lista = document.getElementById('listaEventos');
    lista.innerHTML = '';
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    if (eventos.length === 0) {
        lista.innerHTML = '<p>Nenhum evento cadastrado.</p>';
        return;
    }

    const jaParticipa = eventos.some(e =>
        e.participantes.some(p => p.cpf === usuarioLogado.cpf)
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
        botao.disabled = jaParticipa || e.participantes.length >= e.vagas || (e.soMulheres && usuarioLogado.sexo !== "Feminino");

        botao.addEventListener('click', () => {
            e.participantes.push({
                nome: usuarioLogado.nomeCompleto,
                idade: calcularIdade(usuarioLogado.dataNacimento),
                sexo: usuarioLogado.sexo,
                cpf: usuarioLogado.cpf
            });
            localStorage.setItem('eventos', JSON.stringify(eventos));
            listarEventos();
        });

        div.appendChild(botao);
        lista.appendChild(div);
    });
}

function preencherCamposUsuario() {
    document.getElementById('nome').value = usuarioLogado.nomeCompleto;
    document.getElementById('idade').value = calcularIdade(usuarioLogado.dataNacimento);
    document.getElementById('sexo').value = usuarioLogado.sexo;

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

window.onload = function () {
    listarEventos();
    preencherCamposUsuario();
};
