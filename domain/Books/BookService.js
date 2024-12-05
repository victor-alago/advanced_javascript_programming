const Book = require('./Book');

class BookService {
    async getAllBooks() {
        return await Book.find();
    }

    async getBookById(id) {
        return await Book.findById(id);
    }

    async addBook(data) {
        const book = new Book(data);
        await book.save();
        return book;
    }

    async updateBook(id, data) {
        const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
        if (!updatedBook) {
            throw new Error('Book not found');
        }
        return updatedBook;
    }

    async deleteBook(id) {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            throw new Error('Book not found');
        }
        return deletedBook;
    }

    // searchBooks function, later added to the SearchService
    async searchBooks(filters) {
        const { title, author, year } = filters;
        const query = {};

        // Add filters dynamically
        if (title) query.title = { $regex: title, $options: 'i' }; // Case-insensitive regex
        if (author) query.author = { $regex: author, $options: 'i' };
        if (year) query.year = year;

        return await Book.find(query); // Query MongoDB
    }
}

module.exports = BookService;