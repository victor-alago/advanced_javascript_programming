const express = require('express');
const Database = require('./infrastructure/Database');

// Services
const BookService = require('./domain/Books/BookService');
const UserService = require('./domain/Users/UserService');
const AudioService = require('./domain/Audio/AudioService');

// Routes
const BookRoutes = require('./routes/BookRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AudioRoutes = require('./routes/AudioRoutes');

// Middleware
const AuthMiddleware = require('./middleware/AuthMiddleware');
const LoggerMiddleware = require('./middleware/LoggerMiddleware');
const ErrorMiddleware = require('./middleware/ErrorMiddleware');

const app = express();
const port = 3000;

const db = new Database();
const bookService = new BookService(db);
const userService = new UserService(db);
const audioService = new AudioService(db);

app.use(express.json());

// Use LoggerMiddleware globally
app.use(LoggerMiddleware);

// Routes with AuthMiddleware
app.use('/books', AuthMiddleware, BookRoutes(bookService));
app.use('/users', AuthMiddleware, UserRoutes(userService));
app.use('/audio', AuthMiddleware, AudioRoutes(audioService));

// Error handling middleware
app.use(ErrorMiddleware);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));