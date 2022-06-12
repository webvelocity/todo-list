const todoContainer = document.querySelector('.todo-list');
const items = document.querySelectorAll('.todo-item');

document.addEventListener('DOMContentLoaded', () => {
    const addTodoItemAction = document.querySelector('.add-todo-item-btn');
    addTodoItemAction.addEventListener('click', addTodoItem);
});

removeTodoItem = (item) =>{
    todoContainer.removeChild(item);
}

addTodoItem = () =>{
    let list = document.createElement('li');
    list.textContent = `item ${Math.random(10)}`;
    list.classList.add('todo-item');

    let a = document.createElement("a");
    a.href="#";
    a.textContent = 'remove item'
    a.onclick = ()=> {removeTodoItem(list)};
    
    list.appendChild(a);
    todoContainer.appendChild(list)
}