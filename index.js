const express = require('express');


const app = express();


const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const itemRoutes = require('./routes/route');
app.use('/items', itemRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});