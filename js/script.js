console.log("Hello World");

let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-inputs");
    const todoDate = document.getElementById("todo-date");
    if (validateInput (todoInput.value, todoDate.value)) {
        let todo = {task: todoInput.value, date :todoDate.value };
        todos.push(todo);
        console.log(todos);

    }
}
 
function renderTodo () {
    const todoList = document.getElementsById ("todo-list");
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        todoList.innerHTML += <li class="border p-2 mb-2 flex justify-between items-center">
            <div>
                <p class="font-bold">${todo.task}</p>
                <p class="text-sm text-gray-500">${todo.date}</p>
            </div>
            <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>;
    });
}
function deleteAllTodo () {}

function filterTodo () {}
function validateInput (todo,date) {
    if (!todo ==='' || !date ==='') {
        alert("Please fill in all fields");
        return  false;
    }
        return false;

}
