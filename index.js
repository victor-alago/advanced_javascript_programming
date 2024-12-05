const express = require('express');
const connectDB = require('./infrastructure/Database');

// Import Services
const BookService = require('./domain/Books/BookService');
const UserService = require('./domain/Users/UserService');
const AudioService = require('./domain/Audio/AudioService');
const AuthService = require('./domain/Auth/AuthService');
const SearchService = require('./domain/Search/SearchService');

// Import Routes
const BookRoutes = require('./routes/BookRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AudioRoutes = require('./routes/AudioRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const SearchRoutes = require('./routes/SearchRoutes');


// Middleware
const AuthMiddleware = require('./middleware/AuthMiddleware');
const LoggerMiddleware = require('./middleware/LoggerMiddleware');
const ErrorMiddleware = require('./middleware/ErrorMiddleware');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();


// services
const bookService = new BookService();
const userService = new UserService();
const audioService = new AudioService();
const authService = new AuthService(userService);
const searchService = new SearchService(bookService, audioService);

app.use(express.json());

// Use LoggerMiddleware globally
app.use(LoggerMiddleware);

// Routes with AuthMiddleware
app.use('/books', AuthMiddleware.authenticateToken, BookRoutes(bookService));
app.use('/users', AuthMiddleware.authenticateToken, UserRoutes(userService));
app.use('/audio', AuthMiddleware.authenticateToken, AudioRoutes(audioService));
app.use('/auth', AuthRoutes(authService, userService));
app.use('/search', SearchRoutes(searchService));


// Error handling middleware
app.use(ErrorMiddleware);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));