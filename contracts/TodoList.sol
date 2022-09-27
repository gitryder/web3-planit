// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract TodoList {
    string[] public todos;

    function getAllTodos() public view returns (string[] memory) {
        return todos;
    }

    function addTodo(string memory todo) public {
        todos.push(todo);
    }
}