const express = require('express');
const router = express.Router();

module.exports = (searchService) => {
    router.get('/', async (req, res) => {
        try {
            const results = await searchService.searchAll(req.query); // Pass query parameters
            res.json(results);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    return router;
};