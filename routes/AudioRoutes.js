const express = require('express');
const router = express.Router();

module.exports = (audioService) => {
    // Get all audio records
    router.get('/', async (req, res) => {
        try {
            const audios = await audioService.getAllAudio();
            res.json(audios);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // Get a specific audio record by ID
    router.get('/:id', async (req, res) => {
        const audioId = req.params.id;
        try {
            const audio = await audioService.getAudioById(audioId);
            res.json(audio);
        } catch (err) {
            res.status(404).json({ message: 'Audio not found' });
        }
    });

    // Add a new audio record
    router.post('/', async (req, res) => {
        try {
            const audio = await audioService.addAudio(req.body);
            res.status(201).json(audio);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    // Update an existing audio record
    router.put('/:id', async (req, res) => {
        const audioId = req.params.id;
        try {
            const updatedAudio = await audioService.updateAudio(audioId, req.body);
            res.json(updatedAudio);
        } catch (err) {
            res.status(404).json({ message: 'Audio not found' });
        }
    });

    // Delete an audio record
    router.delete('/:id', async (req, res) => {
        const audioId = req.params.id;
        try {
            const deletedAudio = await audioService.deleteAudio(audioId);
            res.json(deletedAudio);
        } catch (err) {
            res.status(404).json({ message: 'Audio not found' });
        }
    });

    return router;
};