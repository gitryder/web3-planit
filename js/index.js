const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

/*

1. Preparing the required credentials & creating the contract instance
===

web3.eth.defaultAccount = "";

// The ABI of the contract, after compiling it.
const contractAbi = [];

// The address where the contract is deployed.
const contractAddress = "";

const contract = new web3.eth.Contract(contractAbi, contractAddress);
*/

/**

 2. Populating the todos
 ===

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
*/

/**

3. Clearing the todos
===

function clearTodos() {
  todoList.innerHTML = "";
}
*/

/**
 
 4. Getting the submitted todo and adding it to the blockchain
 ===

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
*/

// populateTodos();

/**

5. Listening to the submit event emitted by the form
===

todoForm.addEventListener("submit", handleTodoFormSubmit);
*/
