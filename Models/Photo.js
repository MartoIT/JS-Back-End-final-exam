const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    
    image:{
        type: String,
        required: true,
        //validate: /^http?:\/\//,
    },
    age:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        require: true,
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


const Photo = mongoose.model('Photo', bookSchema);
module.exports = Photo;


// •	name – string (required)
// •	image – string (required)
// •	age – number (required)
// •	description – string (required)
// •	location – string (required)
// •	commentList – an array of objects containing the user's ID and the comment content: [ { userID: '1234', comment: 'Nice photo!'} ]
// •	owner – object ID (a reference to the User model)
// Note:  When a user comments a photo, their ID is added to that collection (commentList)
// Implement the entities with the correct data types.

