const db = require('mongoose');
// const mongoose = await connectToDB();
// console.log(dbConnection);

// const db = await mongoose();
// console.log(db);
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