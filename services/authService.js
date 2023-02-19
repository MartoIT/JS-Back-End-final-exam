const User = require('../Models/User');
const jwt = require('../lib/jwt');
const bcrypt = require('bcrypt');


exports.postRegistreUser = async (username, email, password, repeatPassword) => {

    if(password !== repeatPassword) {
        throw  Error `Passwords do NOT match!`;
    }
    if(!username || !email){
        throw Error `All fields are required!`;
    }
    const hashPassword = await bcrypt.hash(password, 7)
    const user = await User.create({ username, email, password: hashPassword });
    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, 'secret');
    return token

}

exports.postloginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error(`email or password is wrong!`)
    }


    await bcrypt.compare(user.password, password);
 
    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, 'secret');
    return token


}