const fs = require('fs');
const path = require('path');

class Database {
    constructor() {
        this.dbPath = path.join(__dirname, 'db.json');
    }

    read() {
        return JSON.parse(fs.readFileSync(this.dbPath, 'utf-8'));
    }

    write(data) {
        fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 4), 'utf-8');
    }
}

module.exports = Database;