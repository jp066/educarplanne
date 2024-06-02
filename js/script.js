// Get the button element
const criarTarefaButton = document.querySelector('.button-criar');

// Add a click event listener to the button
criarTarefaButton.addEventListener('click', () => {
    // Create an overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    document.body.appendChild(overlay);

    window.location.href = '../pages/criarTarefa.html';
});

document.querySelector('.button-tarefas').addEventListener('click', function() {
    window.location.href = '../pages/listaTarefas.html';
  });