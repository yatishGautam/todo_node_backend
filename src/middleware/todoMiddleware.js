const [getAllTodos, saveToDoController, updateTodoController] = require("../controller/todoController");

async function getTodo(req, res, next){
    const todos = await getAllTodos();
    res.json(todos);
}

async function saveTodo(req, res, next){
    try{
        todo = req.body.todo;
        const all_todo = await saveToDoController(todo);
        res.send(all_todo);
    }catch(error){
        console.log(error)
    }
}
    
    async function updateTodo(req, res, next){
        try{
            const id = req.params.id;
            const newTodo = req.body.todo;
            console.log("new todo::"+JSON.stringify(newTodo));
            const new_todo_list = await updateTodoController(id, newTodo);
            res.send(new_todo_list);
        }catch(error){
            console.log('error on update middleware'+ error);
        }
    }

module.exports = [getTodo, saveTodo, updateTodo];