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


module.exports = [getAllTodos]