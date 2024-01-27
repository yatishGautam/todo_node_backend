const todoModel = require( "../model/todoSchema");

const updateKeys = (data1, data2) => { 
    return {...data1, ...data2}
};

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

async function updateTodoController(id, newtodo){
    try{
        var todoToUpdate = await todoModel.findOne({_id: id });
        console.log('todotoupdate from db'+JSON.stringify(todoToUpdate));
        if (!todoToUpdate){
            console.log('no todo found');
            return null;
        }
        todoToUpdate = updateKeys(todoToUpdate, newtodo);
        const todoToSave = new todoModel.create(todoToUpdate);
        await todoToSave.save();
        const allTodDos = await todoModel.find({});
        return allTodDos;
    }catch(error){
        console.log('updating todo error: '+ error)
    }
}


module.exports = [getAllTodos, saveToDoController, updateTodoController]