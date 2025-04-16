const todoList = JSON.parse(localStorage.getItem('todoList')) || [];


renderTodoList();


function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div> ${name}</div>
    <div> ${dueDate}</div>
     <button class="delete-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html;

  });



  document.querySelector('.js-display-value').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    })
  })


}

document.querySelector('.js-add-todo-button').addEventListener('click', () => { addTodo(); });

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