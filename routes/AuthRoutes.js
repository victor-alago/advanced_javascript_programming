const express = require('express');
const router = express.Router();

module.exports = (authService, userService) => {
    // Login
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const { user, token } = await authService.login(email, password); 
            res.json({ user, token });
        } catch (err) {
            console.error('Login failed:', err.message);
            res.status(400).json({ message: err.message });
        }
    });

    // Register
    router.post('/register', async (req, res) => {
        const { name, email, password } = req.body;
        try {
            const newUser = await authService.register(name, email, password);
            res.status(201).json({ message: 'Registration successful', user: newUser });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });


    // Logout
    router.post('/logout', (req, res) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }

        const result = authService.logout();
        res.json(result);
    });



    return router;
};