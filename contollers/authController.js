const authService = require('../services/authService');
const getError = require('../utils/errorUtils');

exports.getLoginPage = (req, res) => {
    res.render('auth/login')
};

exports.postLoginPage = async (req, res) => {
    const { email, password } = req.body;

   
    try{
        const token = await authService.postloginUser(email, password);
        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');

    }catch(error){
          res.status(404).render('auth/login', { error: getError.getErrorMessage(error) })
    }

   
};

exports.getRegisterPage = (req, res) => {


    res.render('auth/register')
};

exports.postRegisterPage = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try{
        const token = await authService.postRegistreUser(username, email, password, repeatPassword);
        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');
    }catch(error){
        res.status(404).render('auth/register', { error: getError.getErrorMessage(error) })

    }


};

exports.logout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
}

exports.get404 =  (req, res) => {
    res.render('404');
}