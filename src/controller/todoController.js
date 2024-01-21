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

async function saveToDo(todo){
    try{
        const toDoToSave = new todoModel(todo);
        await toDoToSave.save()
    }catch(error){
        console.log(error);
    }
}

module.exports = [getAllTodos, saveToDo]