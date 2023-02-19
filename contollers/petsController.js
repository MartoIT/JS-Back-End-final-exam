const getError = require('../utils/errorUtils');
const petsServices = require('../services/petsServices')
const jwt = require('../lib/jwt');

exports.getCatalogPage = async (req, res) => {
    const allPhotos = await petsServices.getAll();
    res.render('catalog', { allPhotos });
};

exports.getDetails = async (req, res) => {
    const pet = await petsServices.getOne(req.params.petId);
    const isOwner = pet.owner == req.user?._id;
    const OwnerId = pet.owner;
    const user = await petsServices.getUserData(OwnerId)
    const commentList = pet.commentList?.some(id => id == req.user._id);

    res.render(`details`, { pet, user, isOwner, commentList })
}

exports.getCreategPage = async (req, res) => {
    res.render('create');
};


exports.postCreatePost = async (req, res) => {

    try {
        const { name, age, description, location, image } = req.body;
        const owner = req.user._id;

        await petsServices.createPetPost(name, age, description, location, image, owner);
        res.redirect('/catalog');

    } catch (error) {
        res.status(404).render('create', { error: getError.getErrorMessage(error) })
    }

}



exports.delete = async (req, res) => {
    const petId = req.params.petId;
    const pet = await petsServices.getOne(petId);
    const isOwner = pet.owner == req.user?._id;
    if (!isOwner) {
        throw Error`You are not the owner of the book!!!`
    }

    await petsServices.delete(petId);
    res.redirect('/catalog');

}



exports.getEditPage = async (req, res) => {
    const pet = await petsServices.getOne(req.params.petId);

    res.render('edit', { pet });
};

exports.postEditPage = async (req, res) => {
    const id = req.params.petId;
    const data = req.body;

    await petsServices.edit(id, data);

    const pet = await petsServices.getOne(id);
    
    res.render(`details`, { pet })

}


exports.getProfilePage = async (req, res) => {
    const token = req.cookies['auth'];
    const decodedToken = await jwt.verify(token, 'secret');
    const userId = decodedToken._id;
    const userData = await petsServices.getUserData(userId);
    const ownPosts = await petsServices.search(userId);
    let pcsOfPhotos = 0;
    ownPosts.forEach(element => {
        pcsOfPhotos++
    });

    console.log(pcsOfPhotos)
    res.render('profile', { userData, pcsOfPhotos, ownPosts });
}


exports.postComent = async (req, res) => {
    const pet = req.params.postId;
    const coment = req.body.coment;
    const userId = req.user._id
   
    
    //[ { userID: '1234', comment: 'Nice photo!'} ]

    await petsServices.addComent(pet, userId, coment );

    //res.render('/catalog');

}