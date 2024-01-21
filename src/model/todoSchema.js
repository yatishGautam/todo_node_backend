var mongoose = require('../../config/mongoose');
const db = mongoose();
console.log(db);
const todoSchema = new db.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    addedTime: String,
    completedTime: String
});

const todoModel = db.model('todos', todoSchema);

module.exports = todoModel;