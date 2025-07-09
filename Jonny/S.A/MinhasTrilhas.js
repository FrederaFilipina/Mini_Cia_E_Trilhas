    const trilhasCadastradas = JSON.parse(localStorage.getItem("eventos")) || [];
    const lista = document.getElementById("trilhas");

    const modalEditar = document.getElementById("modal-editarTrilha");
    const formEditar = document.getElementById("form-editarTrilha");
    const fecharEditarBtn = document.getElementById("fecharEditar");

    const inputTrilha = document.getElementById("edit-trilha");
    const inputData = document.getElementById("edit-data");
    const inputHora = document.getElementById("edit-hora");
    const inputPonto = document.getElementById("edit-ponto");
    const inputVagas = document.getElementById("edit-vagas");

    let indexEditando = null;

    function renderizarTrilhas() {
      lista.innerHTML = "";

      trilhasCadastradas.forEach((trilha, index) => {
        const novaDiv = document.createElement("div");
        novaDiv.classList.add("eventos");
        novaDiv.innerHTML = `
          <p><strong>Trilha:</strong> ${trilha.trilha}</p>
          <p><strong>Data:</strong> ${trilha.data}</p>
          <p><strong>Horário:</strong> ${trilha.hora}</p>
          <p><strong>Ponto de encontro:</strong> ${trilha.ponto}</p>
          <p><strong>Vagas disponíveis:</strong> ${trilha.vagas}</p>
          <button class="editar-btn" data-index="${index}">Editar</button>
        `;
        lista.appendChild(novaDiv);
      });
    }

    lista.addEventListener("click", (e) => {
      if (e.target.classList.contains("editar-btn")) {
        indexEditando = e.target.getAttribute("data-index");
        const trilha = trilhasCadastradas[indexEditando];

        inputTrilha.value = trilha.trilha;
        inputData.value = trilha.data;
        inputHora.value = trilha.hora;
        inputPonto.value = trilha.ponto;
        inputVagas.value = trilha.vagas;

        modalEditar.showModal();
      }
    });

    fecharEditarBtn.addEventListener("click", () => {
      modalEditar.close();
      document.getElementById("modal-minhasTrilhas").showModal()
    });

    formEditar.addEventListener("submit", (e) => {
      e.preventDefault();

      trilhasCadastradas[indexEditando] = {
        trilha: inputTrilha.value,
        data: inputData.value,
        hora: inputHora.value,
        ponto: inputPonto.value,
        vagas: inputVagas.value,
      };

      localStorage.setItem("eventos", JSON.stringify(trilhasCadastradas));

      renderizarTrilhas();
      modalEditar.close();
      document.getElementById("modal-minhasTrilhas").showModal()

    });

    const abrirBotao = document.querySelectorAll(".abrir-modal");
    abrirBotao.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.showModal();
      });
    });

    const fecharBotao = document.querySelectorAll(".fechar-modal");
    fecharBotao.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.close();
      });
    });

    renderizarTrilhas();