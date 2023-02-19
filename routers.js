const router = require('express').Router();
const homeController = require('./contollers/homeController');
const authController = require('./contollers/authController');
const petsController = require('./contollers/petsController');

router.get('/', homeController.getHomePage);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);
router.get('/logout', authController.logout);

router.get('/catalog', petsController.getCatalogPage);

router.get('/create', petsController.getCreategPage);
router.post('/create', petsController.postCreatePost);
// router.get('/catalog/:bookId/details', booksController.getDetails);
// router.get('/catalog/wish/:bookId', booksController.postAddToWishList);

// router.get('/books/:bookId/edit', booksController.getEditPage);
// router.post('/books/:bookId/edit', booksController.postEditPage);

// router.get('/profile', booksController.getProfilePage);

// router.get('/delete/:bookId', booksController.delete);
router.get('*', authController.get404);

module.exports = router;