const todoList = [{
   name: 'make dinner',
   dueDate: '2025-09-18'
 }, {
    name: 'wash dishes',
    dueDate: '2025-09-23'
  }, {
      name: 'do laundry',
      dueDate: '2025-09-25'
   }];

   function renderTodoList() {

      let todoListHTML = '';
      todoList.forEach(function(todoObject, index) {
         
         for (let i = 0; i < todoList.length; i++) {
            const { name, dueDate } = todoObject
            const html = `
               
               <div>${name}</div>
               <div>${dueDate}</div>
               <button class="delete-todo-button js-delete-todo-button">
                  Delete
               </button>
            `;
         }   todoListHTML += html;
      });
   
      const todoListElement = document.querySelector('.js-todo-list');
      todoListElement.innerHTML = todoListHTML;
   }

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
   addTodo();
});

document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
   deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
   });
});


renderTodoList();
function addTodo() {
   const inputElement = document.querySelector('.js-name-input')

   const name = inputElement.value;
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   todoList.push({
      name,
      dueDate
   });

   inputElement.value = '';
   renderTodoList();
}