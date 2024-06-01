document.getElementById('form-tarefa').addEventListener('submit', function(event) {
  event.preventDefault(); // impede o comportamento padrão de envio do formulário

  // Coleta os dados do formulário
  var titulo = document.getElementById('titulo').value;
  var descricao = document.getElementById('descricao').value;
  var data = document.getElementById('data').value;

  // Cria a tarefa
  var tarefa = {
    titulo: titulo,
    descricao: descricao,
    data: data
  };

  // Armazena a tarefa no localStorage
  var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));

  alert('Tarefa criada');
  window.location.href = '../pages/listaTarefas.html';
});

