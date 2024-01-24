const db = require('mongoose');

const schema = db.Schema;

const todoSchema = new schema({
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