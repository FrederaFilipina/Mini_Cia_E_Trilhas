
  // Seleciona o formulário pelo id
  const form = document.getElementById('formAvaliacao');
  // Seleciona a div onde as avaliações serão exibidas
  const lista = document.getElementById('listaAvaliacoes');

  // Função que carrega as avaliações do localStorage e exibe na tela
  function carregarAvaliacoes() {
    // Recupera as avaliações salvas ou cria array vazio se não existir
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoesTrilha')) || [];
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    // Percorre cada avaliação para criar elementos na tela
    avaliacoes.forEach(av => {
      const div = document.createElement('div'); // Cria div para avaliação
      div.className = 'avaliacao'; // Aplica classe CSS

      // Preenche o conteúdo da avaliação com estrelas e texto
      div.innerHTML = `
        <strong>Nome:</strong> ${av.nome}<br>
        <strong>Relevo:</strong> ${'★'.repeat(av.relevo)}${'☆'.repeat(5 - av.relevo)}<br>
        <strong>Dificuldade:</strong> ${'★'.repeat(av.dificuldade)}${'☆'.repeat(5 - av.dificuldade)}<br>
        <strong>Tempo:</strong> ${'★'.repeat(av.tempo)}${'☆'.repeat(5 - av.tempo)}<br>
        <strong>Comentário:</strong> ${av.comentario}
      `;
      lista.appendChild(div); // Adiciona a avaliação à lista
    });
  }

  // Evento disparado quando o formulário é enviado
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional (recarregar a página)

    // Pega os valores preenchidos no formulário
    const nome = document.getElementById('nome').value.trim();
    const relevo = parseInt(document.getElementById('relevo').value);
    const dificuldade = parseInt(document.getElementById('dificuldade').value);
    const tempo = parseInt(document.getElementById('tempo').value);
    const comentario = document.getElementById('comentario').value.trim();

    // Cria objeto com os dados da avaliação
    const novaAvaliacao = { nome, relevo, dificuldade, tempo, comentario };

    // Recupera avaliações existentes ou cria um array vazio
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoesTrilha')) || [];
    avaliacoes.push(novaAvaliacao); // Adiciona a nova avaliação no array

    // Salva o array atualizado no localStorage
    localStorage.setItem('avaliacoesTrilha', JSON.stringify(avaliacoes));

    form.reset(); // Limpa o formulário após envio
    carregarAvaliacoes(); // Atualiza a lista exibida com as avaliações
  });

  // Carrega as avaliações ao carregar a página
  carregarAvaliacoes();

  const form1 = document.getElementById('formAvaliacao'); // Seleciona o formulário pelo ID
const lista1 = document.getElementById('listaAvaliacoes'); // Seleciona o local onde as avaliações serão exibidas

// Função para carregar e exibir avaliações do localStorage
function carregarAvaliacoes() {
  const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || []; // Recupera as avaliações ou cria array vazio
  lista1.innerHTML = ''; // Limpa a lista antes de atualizar

  // Para cada avaliação salva, cria um elemento na tela
  avaliacoes.forEach(av => {
    const div = document.createElement('div'); // Cria uma div para o comentário
    div.className = 'comentario'; // Define a classe CSS
    div.innerHTML = `
      <strong>Participante:</strong> ${av.nome}<br> <!-- Nome -->
      <strong>Nota:</strong> ${'★'.repeat(av.nota)}${'☆'.repeat(5 - av.nota)}<br> <!-- Estrelas com base na nota -->
      <strong>Comentário:</strong> ${av.comentario} <!-- Comentário -->
    `;
    lista1.appendChild(div); // Adiciona o comentário à lista
  });
}

// Evento para lidar com envio do formulário
form1.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  const nome = document.getElementById('nome').value.trim(); // Pega o nome e remove espaços
  const nota = parseInt(document.getElementById('nota').value); // Pega a nota e converte para número
  const comentario = document.getElementById('comentario').value.trim(); // Pega o comentário

  if (nota < 1 || nota > 5) { // Validação da nota
    alert("Por favor, insira uma nota entre 1 e 5.");
    return; // Interrompe se a nota for inválida
  }

  const novaAvaliacao = { nome, nota, comentario }; // Cria objeto com os dados

  const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || []; // Recupera ou inicia array
  avaliacoes.push(novaAvaliacao); // Adiciona a nova avaliação
  localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes)); // Salva no localStorage

  form1.reset(); // Limpa o formulário
  carregarAvaliacoes(); // Atualiza a lista de avaliações na tela
});
