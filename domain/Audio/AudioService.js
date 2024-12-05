const Audio = require('./Audio');

class AudioService {
    async getAllAudio() {
        // Fetch all audio records, populating the book details
        return await Audio.find().populate('bookId');
    }

    async getAudioById(id) {
        // Fetch a specific audio record by ID
        const audio = await Audio.findById(id).populate('bookId');
        if (!audio) {
            throw new Error('Audio not found');
        }
        return audio;
    }

    async addAudio(audioData) {
        // Add a new audio record
        const audio = new Audio(audioData);
        await audio.save();
        return audio;
    }

    async updateAudio(id, audioData) {
        // Update an existing audio record
        const updatedAudio = await Audio.findByIdAndUpdate(id, audioData, { new: true });
        if (!updatedAudio) {
            throw new Error('Audio not found');
        }
        return updatedAudio;
    }

    async deleteAudio(id) {
        // Delete an audio record
        const deletedAudio = await Audio.findByIdAndDelete(id);
        if (!deletedAudio) {
            throw new Error('Audio not found');
        }
        return deletedAudio;
    }

    // searchAudio function, later added to the SearchService
    async searchAudio(filters) {
        const { narrator, bookId } = filters;
        const query = {};

        if (narrator) query.narrator = { $regex: narrator, $options: 'i' }; // Case-insensitive regex
        if (bookId) query.bookId = bookId;

        return await Audio.find(query).populate('bookId'); // Query MongoDB and populate book details
    }
}

module.exports = AudioService;