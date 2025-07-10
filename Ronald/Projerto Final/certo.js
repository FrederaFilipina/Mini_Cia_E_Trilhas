
let cadastroUsuarios = JSON.parse(localStorage.getItem("CadastroUser")) || [];
let usuarioLogado = cadastroUsuarios.find(user => user.logado === true);


if (!usuarioLogado) {
    alert("Você precisa estar logado para criar um evento.");
    window.location.href = "login.html"; 

document.getElementById('eventoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const trilha = document.getElementById('trilha').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const ponto = document.getElementById('ponto').value;
    const vagas = document.getElementById('vagas').value;

  
    const nome = usuarioLogado.nomeCompleto.trim().toLowerCase();
    const idade = calcularIdade(usuarioLogado.dataNacimento);
    const sexo = usuarioLogado.sexo;

    let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

   
    const jaCriou = eventos.some(e => e.nome.trim().toLowerCase() === nome);
    if (jaCriou) {
        document.getElementById('mensagem').innerText = "Você já criou um evento e não pode criar outro.";
        return;
    }

    
    const hoje = new Date();
    const dataSelecionada = new Date(data + 'T00:00');
    hoje.setHours(0, 0, 0, 0);

    if (dataSelecionada < hoje) {
        document.getElementById('mensagem').innerText = "Não é permitido criar eventos com data retroativa.";
        return;
    }

    
    const eventoCriado = {
        trilha,
        data,
        hora,
        ponto,
        vagas,
        nome,
        idade,
        sexo,
        soMulheres: sexo === "F"
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

    eventos.forEach((e, i) => {
        const div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.style.margin = '10px 0';
        div.style.padding = '10px';

        let restricao = "";
        if (e.soMulheres) {
            restricao = "<strong>Evento exclusivo para mulheres</strong><br>";
        }

        div.innerHTML = `
            <strong>Evento ${i + 1}</strong><br>
            Trilha: ${e.trilha}<br>
            Data: ${e.data} às ${e.hora}<br>
            Ponto de Encontro: ${e.ponto}<br>
            Vagas: ${e.vagas}<br>
            Organizador: ${e.nome} (${e.idade} anos, ${e.sexo})<br>
            ${restricao}
        `;

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
}