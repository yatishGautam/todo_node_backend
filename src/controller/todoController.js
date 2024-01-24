const todoModel = require( "../model/todoSchema");

async function getAllTodos(){
    try{
        const allTodos = await todoModel.find({});
        return allTodos;
    }
    catch(error){
        console.log(error);
    }
};

async function saveToDoController(todo){
    try{
        const toDoToSave = new todoModel(todo);
        console.log('todo: '+ JSON.stringify(toDoToSave))
        await toDoToSave.save()
        const allTodDos = await todoModel.find({});
        return allTodDos;
    }catch(error){
        console.log(error);
    }
}

async function updateTodoController(id){
    try{
        const todoToUpdate = await todoModel.findOne({_id: id });
        if (!todoToUpdate){
            console.log('no todo found');
            return null;
        }
        todoToUpdate.completed = true;
        await todoToUpdate.save();
        const allTodDos = await todoModel.find({});
        return allTodDos;
    }catch(error){
        console.log('updating todo error: '+ error)
    }
}


module.exports = [getAllTodos, saveToDoController]