const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    favorite: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", taskSchema)