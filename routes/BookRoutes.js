const express = require('express');
const router = express.Router();

module.exports = (bookService) => {
    // Get all books
    router.get('/', async (req, res) => {
        try {
            const books = await bookService.getAllBooks();
            res.json(books);
        } catch (err) {
            res.status(500).json({ message: 'Failed to fetch books', error: err.message });
        }
    });

    // Get a specific book by ID
    router.get('/:id', async (req, res) => {
        try {
            const bookId = req.params.id; // MongoDB uses string IDs
            const book = await bookService.getBookById(bookId);
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Failed to fetch book', error: err.message });
        }
    });

    // Add a new book
    router.post('/', async (req, res) => {
        try {
            const newBook = await bookService.addBook(req.body);
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).json({ message: 'Failed to add book', error: err.message });
        }
    });

    // Update an existing book by ID
    router.put('/:id', async (req, res) => {
        try {
            const bookId = req.params.id; // MongoDB uses string IDs
            const updatedBook = await bookService.updateBook(bookId, req.body);
            res.json(updatedBook);
        } catch (err) {
            if (err.message === 'Book not found') {
                res.status(404).json({ message: err.message });
            } else {
                res.status(400).json({ message: 'Failed to update book', error: err.message });
            }
        }
    });

    // Delete a book by ID
    router.delete('/:id', async (req, res) => {
        try {
            const bookId = req.params.id; // MongoDB uses string IDs
            const deletedBook = await bookService.deleteBook(bookId);
            res.json(deletedBook);
        } catch (err) {
            if (err.message === 'Book not found') {
                res.status(404).json({ message: err.message });
            } else {
                res.status(500).json({ message: 'Failed to delete book', error: err.message });
            }
        }
    });

    return router;
};