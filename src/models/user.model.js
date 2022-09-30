const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;


