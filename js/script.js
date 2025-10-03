console.log("Hello World");

let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-inputs");
    const todoDate = document.getElementById("todo-date");

    /// Validate input
    if (validateInput (todoInput.value, todoDate.value)) {
        let todo = {task: todoInput.value, date :todoDate.value };
        todos.push(todo);
        
        ///Render the updated todo list
        renderTodo();
    }
}
 
function renderTodo () {
    const todoList = document.getElementsById("todo-list");
    let hmlElements = '';

    todos.forEach((todo, index) => {
       htmlElements += `
            '<li class="border p-2 mb-2 flex justify-between items-center'
                <div>
                    <><p> class="font-bold"&gt;${todo.task}</p><p class="text-sm text-gray-500">${todo.date}</p></></div>
            <button onclick="deleteTodo(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>\
    `;
    });
}

function deleteAlltodo (){
    /// Clear the todos array
    todos = [];

    // Render the empty todo list
    renderTodo();
}
function validateInput (todo,date) {
    if (!todo ==='' || !date ==='') {
        /// Show an alert if validation falls
        alert("Please fill in all fields");
        return  false;
    }
    /// Input is valid 
        return true;

}
