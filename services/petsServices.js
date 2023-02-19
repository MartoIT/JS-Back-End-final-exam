const Photo = require('../Models/Photo');
const User = require('../Models/User');


exports.createPetPost = async (name, age, description, location, image, owner) => {
    const userOwner = await this.getUserData(owner)
    
    const newPet = await Photo.create({ name, age, description, location, image, owner });
    
};

exports.getAll = async () => {
    return await Photo.find().lean();
};

exports.getOne = async (id) => {
    const petData = await Photo.findById(id).lean();
    return petData;
}

exports.getUserData = async (id) => {
    const userData = await User.findById(id).lean();
    return userData;
}
exports.addComent = async (petId, userID, coment) => {

    const pet = await Photo.findById(petId);
    
    pet.commentList.push(userID, coment);
    console.log(pet.commentList)
    await pet.save();
}

exports.delete = async (petId) => {

    await Photo.findByIdAndDelete(petId);

}

exports.edit = async (id, data) => {
    await Photo.findByIdAndUpdate(id, data);
}

exports.search = async (id) => {

    let posts = await this.getAll();


    if (posts) {

        posts = posts.filter(x => x.owner == id);
    }

    return posts;
}