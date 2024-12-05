class SearchService {
    constructor(bookService, audioService) {
        this.bookService = bookService;
        this.audioService = audioService;
    }

    async searchAll(filters) {
        const { type, ...rest } = filters;

        if (type === 'books') {
            return await this.bookService.searchBooks(rest);
        }

        if (type === 'audio') {
            return await this.audioService.searchAudio(rest);
        }

        // If no type specified, search both
        const books = await this.bookService.searchBooks(rest);
        const audio = await this.audioService.searchAudio(rest);

        return { books, audio };
    }
}

module.exports = SearchService;