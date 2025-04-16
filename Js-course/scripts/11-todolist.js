const todoList = JSON.parse(localStorage.getItem('todoList')) || [];


renderTodoList();


function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div> ${name}</div>
    <div> ${dueDate}</div>
     <button onclick = '
        todoList.splice(${i}, 1);
        renderTodoList();
        'class="delete-button">Delete</button>`;
    todoListHTML += html;
  }
  document.querySelector('.js-display-value').innerHTML = todoListHTML;
}


function addTodo() {
  document.querySelector('.js-name-input')
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateinputElement = document.querySelector('.js-date-input');
  const dueDate = dateinputElement.value;
  todoList.push({ name, dueDate });
  inputElement.value = '';
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}