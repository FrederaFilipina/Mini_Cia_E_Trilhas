const form = document.getElementById('formAvaliacao');
    const lista = document.getElementById('listaAvaliacoes');

    // Carrega avaliações do localStorage
    function carregarAvaliacoes() {
      const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
      lista.innerHTML = '';

      avaliacoes.forEach(av => {
        const div = document.createElement('div');
        div.className = 'comentario';
        div.innerHTML = `
          <strong>Participante:</strong> ${av.nome}<br>
          <strong>Nota:</strong> ${'★'.repeat(av.nota)}${'☆'.repeat(5 - av.nota)}<br>
          <strong>Comentário:</strong> ${av.comentario}
        `;
        lista.appendChild(div);
      });
    }

    // Envio do formulário
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const nota = parseInt(document.getElementById('nota').value);
      const comentario = document.getElementById('comentario').value.trim();

      if (nota < 1 || nota > 5) {
        alert("Por favor, insira uma nota entre 1 e 5.");
        return;
      }

      const novaAvaliacao = { nome, nota, comentario };

      const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
      avaliacoes.push(novaAvaliacao);
      localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

      form.reset();
      carregarAvaliacoes();
    });

    // Inicializa
    carregarAvaliacoes();