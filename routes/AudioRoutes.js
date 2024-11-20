const express = require('express');
const router = express.Router();

module.exports = (audioService) => {
    router.get('/:id', (req, res) => {
        const audioId = parseInt(req.params.id, 10);
        const audio = audioService.getAudioById(audioId);
        if (audio) {
            res.json(audio);
        } else {
            res.status(404).json({ message: 'Audio not found' });
        }
    });

    return router;
};