document.addEventListener("DOMContentLoaded", () => {
  const listaEventos = document.getElementById("listaEventos");
  const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

  if (eventos.length === 0) {
    listaEventos.innerHTML = "<p>Nenhum evento cadastrado.</p>";
    return;
  }

  eventos.forEach((evento, index) => {
    const div = document.createElement("div");
    div.className = "evento";
    div.innerHTML = `
      <h3>${evento.trilha}</h3>
      <p><strong>Data:</strong> ${evento.data}</p>
      <p><strong>Hora:</strong> ${evento.hora}</p>
      <p><strong>Ponto de Encontro:</strong> ${evento.ponto}</p>
      <p><strong>Vagas:</strong> ${evento.vagas}</p>
      <div class="botoes">
        <button onclick="mostrarUsuario(${index})">👤 Ver Criador</button>
        <button onclick="participar(${index})">✅ Participar</button>
      </div>
      <div id="usuario-${index}" style="display: none; margin-top: 10px;">
        <p><strong>Nome:</strong> ${evento.nome}</p>
        <p><strong>Idade:</strong> ${evento.idade}</p>
        <p><strong>Sexo:</strong> ${evento.sexo}</p>
      </div>
    `;
    listaEventos.appendChild(div);
  });
});

function mostrarUsuario(index) {
  const divUsuario = document.getElementById(`usuario-${index}`);
  divUsuario.style.display = divUsuario.style.display === "none" ? "block" : "none";
}

function participar(index) {
  alert("Parabéns! Você se inscreveu no evento.");
 
}
