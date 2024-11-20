const express = require('express');
const router = express.Router();

module.exports = (bookService) => {
    router.get('/:id', (req, res) => {
        const bookId = parseInt(req.params.id, 10);
        const book = bookService.getBookById(bookId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    });

    return router;
};