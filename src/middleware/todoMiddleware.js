const getAllTodos = require("../controller/todoController");

async function getTodo(req, res, next){
    const todos = await getAllTodos();
    res.json(todos);
}

async function saveTodo(req, res, next){
    todo = req.body
}

module.exports = getTodo;