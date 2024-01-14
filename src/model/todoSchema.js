const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    addedTime: String,
    completedTime: String
});

const todoModel = mongoose.model('todos', todoSchema);

module.exports = todoModel;