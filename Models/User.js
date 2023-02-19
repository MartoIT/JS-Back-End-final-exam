const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        

    },
    email: {
        type: String,
        required: true,
        minLength: 10,
       
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
        
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;

// •	The username is required and should be at least 2 characters long.
// •	The email is required and should be at least 10 characters long.
// •	The password is required and should be at least 4 characters long.
// •	The repeat password is required and should be equal to the password.
