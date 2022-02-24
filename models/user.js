const mongoose = require('mongoose');

//schema is a blueprint for database
const Schema = mongoose.Schema;  // to structure the database

const User = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        status: { type: String, required: true }
    },
    {
        timestamps: true
    },
)


module.exports = mongoose.model('users', User);

