const todoForm = document.getElementById("todo-form");

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

// Set Contract Abi
const contractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "todo",
        type: "string",
      },
    ],
    name: "addTodo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTodos",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "todos",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0xBC09b448346E64cFda7Fb9FfE055667E1ce0B33f";

const contract = web3.eth.contract(contractAbi).at(contractAddress);

/*
function populateTodos() {
  const todos = contract.getAllTodos.call((err, todos) => {
    todos.forEach((todo) => {
      if (todo !== "") {
        const todoList = document.getElementById("todo-list");
        const todoElement = document.createElement("li");
        todoElement.className = "list-item";
        todoElement.innerText = todo;
        todoList.appendChild(todoElement);
      }
    });
  });
}
*/

// function handleTodoFormSubmit(event) {
//   event.preventDefault();

//   const todoFormData = new FormData(todoForm);
//   const todoContent = todoFormData.get("todo");

//   contract.addTodo(todoContent);
//   window.location.reload();
// }

// populateTodos();
// todoForm.addEventListener("submit", handleTodoFormSubmit);
