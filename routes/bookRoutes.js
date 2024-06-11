const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/books', bookController.createBook);
router.get('/books/:bookId', bookController.readBook);
router.put('/books/:bookId', bookController.updateBook);
router.delete('/books/:bookId', bookController.deleteBook);

module.exports = router;
