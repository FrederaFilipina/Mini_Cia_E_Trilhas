document.getElementById("eventoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const trilha = document.getElementById("trilha").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const ponto = document.getElementById("ponto").value;
  const vagas = document.getElementById("vagas").value;
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;

  const novoEvento = {
    trilha,
    data,
    hora,
    ponto,
    vagas,
    nome,
    idade,
    sexo
  };

  const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

  // Verifica se a mesma pessoa já cadastrou um evento com mesma trilha e data
  const duplicado = eventos.some(ev =>
    ev.nome === nome &&
    ev.trilha === trilha &&
    ev.data === data
  );

  const mensagemDiv = document.getElementById("mensagem");

  if (duplicado) {
    mensagemDiv.innerText = "Erro: Você já cadastrou um evento nesta trilha e data.";
    mensagemDiv.style.color = "red";
    return;
  }

  eventos.push(novoEvento);
  localStorage.setItem("eventos", JSON.stringify(eventos));

  mensagemDiv.innerText = "Evento cadastrado com sucesso!";
  mensagemDiv.style.color = "green";

  // Limpa o formulário
  this.reset();
});
