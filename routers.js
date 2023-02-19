const router = require('express').Router();
const homeController = require('./contollers/homeController');

router.get('/', homeController.getHomePage);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);
router.get('/logout', authController.logout);

router.get('/catalog', booksController.getCatalogPage);

// router.get('/create', booksController.getCreategPage);
// router.post('/create', booksController.postCreateReview);
// router.get('/catalog/:bookId/details', booksController.getDetails);
// router.get('/catalog/wish/:bookId', booksController.postAddToWishList);

// router.get('/books/:bookId/edit', booksController.getEditPage);
// router.post('/books/:bookId/edit', booksController.postEditPage);

// router.get('/profile', booksController.getProfilePage);

// router.get('/delete/:bookId', booksController.delete);
router.get('*', authController.get404);

module.exports = router;