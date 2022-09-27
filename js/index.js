const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

web3.eth.defaultAccount = "";

// The ABI of the contract, after compiling it.
const contractAbi = [];

// The address where the contract is deployed.
const contractAddress = "";

const contract = new web3.eth.Contract(contractAbi, contractAddress);

function populateTodos() {
  contract.methods
    .getAllTodos()
    .call()
    .then((todos) => {
      console.log(todos);
      todos.forEach((todo) => {
        const todoElement = document.createElement("li");
        todoElement.className = "list-item";
        todoElement.innerText = todo;
        todoList.appendChild(todoElement);
      });
    });
}

function clearTodos() {
  todoList.innerHTML = "";
}

function handleTodoFormSubmit(event) {
  event.preventDefault();

  const todoFormData = new FormData(todoForm);
  const todoContent = todoFormData.get("todo");

  console.log("account", web3.eth.defaultAccount);

  contract.methods
    .addTodo(todoContent)
    .send({ from: web3.eth.defaultAccount })
    .then(() => {
      clearTodos();
      populateTodos();
    });
}

populateTodos();

todoForm.addEventListener("submit", handleTodoFormSubmit);
