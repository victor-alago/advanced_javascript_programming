const mongoose = require('mongoose');

const AudioSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    narrator: { type: String, required: true },
    length: { type: String, required: true }
});

module.exports = mongoose.model('Audio', AudioSchema);