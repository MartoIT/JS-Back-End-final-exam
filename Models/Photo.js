const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
    },
    
    image:{
        type: String,
        required: true,
        //validate: /^http?:\/\//,
    },
    age:{
        type: Number,
        required: true,
        min:1,
        max: 10,
    },
    description:{
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    location:{
        type: String,
        require: true,
        min: 5,
        max: 50,
    },
    commentList:[{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
})


const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;


// •	The name is required and should be at least 2 characters.
// •	The photo image is required and should start with http:// or https://
// •	The age is required and should be at least 1 and no longer than 100 characters.
// •	The description is required and should be at least 5 and no longer than 50 characters.
// •	The location is required and should be at least 5 and no longer than 50 characters.



// •	name – string (required)
// •	image – string (required)
// •	age – number (required)
// •	description – string (required)
// •	location – string (required)
// •	commentList – an array of objects containing the user's ID and the comment content: [ { userID: '1234', comment: 'Nice photo!'} ]
// •	owner – object ID (a reference to the User model)
// Note:  When a user comments a photo, their ID is added to that collection (commentList)
// Implement the entities with the correct data types.

