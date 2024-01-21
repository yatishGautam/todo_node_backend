const db = require( "../../config/mongoose");
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
        toDoToSave.save()
        .then(() => console.log('db updated'))
        .catch((err) => console.log(err));      
    }catch(error){
        console.log(error);
    }
}

module.exports = [getAllTodos, saveToDoController]