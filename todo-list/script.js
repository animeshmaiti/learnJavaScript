let title, description, todoList;

const addTodo = () => {
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    console.log(title, description);
    localStorage.setItem(title, description);
    showTodo();
}
const removeTodo = (key) => {
    localStorage.removeItem(key);
    showTodo();
}
const showTodo = () => {
    todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        title = localStorage.key(i);
        description = localStorage.getItem(title);
        todoList.innerHTML += `
        <div class="todoList">
            <details class='details'>
                <summary>${title}</summary>
                <p>${description}</p>
            </details>
            <button class="remove" onclick="removeTodo('${title}')">Remove</button>
        </div>
        <br>
    `;
    }
}
showTodo();