const getAllTodos = require("../controller/todoController");

async function getTodo(req, res, next){
    const todos = await getAllTodos();
    res.json(todos);
}

module.exports = getTodo;