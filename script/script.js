const form = document.querySelector('.new-todo-form');
const todoInput = document.querySelector('.new-todo-input');
const listElement = document.querySelector('.todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = todoInput.value;

  const todoElement = document.createElement('div');
  todoElement.classList.add('todo');

  const todoContentElement = document.createElement('div');
  todoContentElement.classList.add('content');

  todoElement.appendChild(todoContentElement);

  const todoInputElement = document.createElement('input');
  todoInputElement.classList.add('text');
  todoInputElement.type = 'text';
  todoInputElement.value = todo;
  todoInputElement.setAttribute('readonly', 'readonly');

	todoContentElement.appendChild(todoInputElement);

  const todoActionElements = document.createElement('div');
  todoActionElements.classList.add('actions');

  const todoEditElement = document.createElement('button');
  todoEditElement.classList.add('edit');

  const editLogo = document.createElement('img');
  editLogo.setAttribute('src', './img/edit.svg');

  todoEditElement.appendChild(editLogo);

  const todoDeleteElement = document.createElement('button');
  todoDeleteElement.classList.add('delete');

  const deleteLogo = document.createElement('img');
  deleteLogo.setAttribute('src', './img/delete.svg');

  todoDeleteElement.appendChild(deleteLogo);

  todoActionElements.appendChild(todoEditElement);
  todoActionElements.appendChild(todoDeleteElement);

  todoElement.appendChild(todoActionElements);

  listElement.appendChild(todoElement);

  todoInput.value = '';

  todoEditElement.addEventListener('click', () => {
    if (editLogo.getAttribute('src') === './img/edit.svg') {
      editLogo.setAttribute('src', './img/done.svg');
      todoInputElement.removeAttribute('readonly');
      todoInputElement.focus();
    } else {
      editLogo.setAttribute('src', './img/edit.svg');
      todoInputElement.setAttribute('readonly', 'readonly');
    }
  });

  todoDeleteElement.addEventListener('click', () => {
    listElement.removeChild(todoElement);
  });
});