class BookService {
    constructor(db) {
        this.db = db;
    }

    getAllBooks() {
        return this.db.read().books;
    }

    getBookById(id) {
        return this.getAllBooks().find(book => book.id === id);
    }

    addBook(book) {
        const db = this.db.read();
        const newId = db.books.length > 0 ? db.books[db.books.length - 1].id + 1 : 1;
        const newBook = { id: newId, ...book };
        db.books.push(newBook);
        this.db.write(db);
        return newBook;
    }

    deleteBook(id) {
        const db = this.db.read();
        const index = db.books.findIndex(book => book.id === id);
        if (index !== -1) {
            const deleted = db.books.splice(index, 1);
            this.db.write(db);
            return deleted[0];
        }
        return null;
    }
}

module.exports = BookService;