const form = document.getElementById('formAvaliacao'); // Seleciona o formulário pelo ID
const lista = document.getElementById('listaAvaliacoes'); // Seleciona o local onde as avaliações serão exibidas

// Função para carregar e exibir avaliações do localStorage
function carregarAvaliacoes() {
  const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || []; // Recupera as avaliações ou cria array vazio
  lista.innerHTML = ''; // Limpa a lista antes de atualizar

  // Para cada avaliação salva, cria um elemento na tela
  avaliacoes.forEach(av => {
    const div = document.createElement('div'); // Cria uma div para o comentário
    div.className = 'comentario'; // Define a classe CSS
    div.innerHTML = `
      <strong>Participante:</strong> ${av.nome}<br> <!-- Nome -->
      <strong>Nota:</strong> ${'★'.repeat(av.nota)}${'☆'.repeat(5 - av.nota)}<br> <!-- Estrelas com base na nota -->
      <strong>Comentário:</strong> ${av.comentario} <!-- Comentário -->
    `;
    lista.appendChild(div); // Adiciona o comentário à lista
  });
}

// Evento para lidar com envio do formulário
form.addEventListener('submit', function(e) {
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

  form.reset(); // Limpa o formulário
  carregarAvaliacoes(); // Atualiza a lista de avaliações na tela
});
