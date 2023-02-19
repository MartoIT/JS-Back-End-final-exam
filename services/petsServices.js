const Photo = require('../Models/Photo');
const User = require('../Models/User');


exports.createPetPost = async (name, age, description, location, image) => {
    await Photo.create({ name, age, description, location, image})
};

exports.getAll = async () => {
    return await Photo.find().lean();
};

exports.getOne = async (id) => {
    const petData = await Book.findById(id).lean();
    return petData;
}

exports.getUserData = async (id) => {
    const userData = await User.findById(id).lean();
    return userData;
}
// exports.wishToRead = async (wisherId, bookId) => {

//     const book = await Book.findById(bookId)
//     book.wishingList.push(wisherId);
//     await book.save();
// }

exports.delete = async (petId) => {

    await Photo.findByIdAndDelete(petId);

}

exports.edit = async (id, data) => {
    await Photo.findByIdAndUpdate(id, data);
}

// exports.search = async (id) => {

//     let books = await this.getAll();


//     if (books) {

//         books = books.filter(x => x.wishingList == id);
//     }

//     return books;
// }