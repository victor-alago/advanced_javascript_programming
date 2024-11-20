const express = require('express');
const router = express.Router();

module.exports = (userService) => {
    router.get('/:id', (req, res) => {
        const userId = parseInt(req.params.id, 10);
        const user = userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });

    return router;
};