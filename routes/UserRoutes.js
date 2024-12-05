const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middleware/AuthMiddleware');

module.exports = (userService) => {
    // Get User Profile
    router.get('/profile', AuthMiddleware.authenticateToken, async (req, res) => {
        try {
            const userProfile = await userService.getUserProfile(req.user.id); // Pass user ID
            res.json(userProfile);
        } catch (err) {
            console.error('Error fetching user profile:', err.message); 
            res.status(404).json({ message: err.message });
        }
    });

    // Update User Profile
    router.put('/profile', AuthMiddleware.authenticateToken, async (req, res) => {
        try {
            const updatedUser = await userService.updateUserProfile(req.user.id, req.body); // Pass user ID
            res.json(updatedUser);
        } catch (err) {
            console.error('Error updating user profile:', err.message); 
            res.status(404).json({ message: err.message });
        }
    });

    return router;
};