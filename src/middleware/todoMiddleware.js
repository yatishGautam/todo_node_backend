const [getAllTodos, saveToDo] = require("../controller/todoController");

async function getTodo(req, res, next){
    const todos = await getAllTodos();
    res.json(todos);
}

async function saveTodo(req, res, next){
    try{
        todo = req.body.todo;
        await saveToDo(todo);
        res.send('your shit saved');
    }catch(error){
        console.log(error)
    }
    
}

module.exports = [getTodo, saveTodo];