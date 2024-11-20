class AudioService {
    constructor(db) {
        this.db = db;
    }

    getAllAudio() {
        return this.db.read().audio;
    }

    getAudioById(id) {
        return this.db.read().audio.find(audio => audio.id === id);
    }

    addAudio(audio) {
        const db = this.db.read();
        const newId = db.audio.length > 0 ? db.audio[db.audio.length - 1].id + 1 : 1;
        const newAudio = { id: newId, ...audio };
        db.audio.push(newAudio);
        this.db.write(db);
        return newAudio;
    }
}

module.exports = AudioService;