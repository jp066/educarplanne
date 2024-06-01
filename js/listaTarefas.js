var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    
var listaTarefas = document.getElementById('lista-tarefas');

tarefas.forEach(function(tarefa, index) {
  var divTarefa = document.createElement('div');
  divTarefa.className = 'card';
  divTarefa.innerHTML = `
    <h2 class="titulo-tarefa">${tarefa.titulo}</h2>
    <p class="descricao-tarefa">${tarefa.descricao}</p>
    <p class="data-tarefa">${tarefa.data}</p>
    <input type="checkbox" id="tarefa-${tarefa.titulo}" name="tarefa-${tarefa.titulo}">
    <label for="tarefa-${tarefa.titulo}">Tarefa concluída</label>
  `;
  listaTarefas.appendChild(divTarefa);

  // Adiciona um ouvinte de evento ao checkbox
  var checkbox = divTarefa.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Remove a tarefa do DOM se o checkbox estiver marcado
      divTarefa.remove();

      // Remove a tarefa do array de tarefas
      tarefas.splice(index, 1);

      // Atualiza as tarefas no localStorage
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  });
});

var voltarImg = document.querySelector('.voltar');

voltarImg.addEventListener('click', function() {
    window.location.href = '../pages/index.html';
});