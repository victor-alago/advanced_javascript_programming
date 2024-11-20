class UserService {
    constructor(db) {
        this.db = db;
    }

    getAllUsers() {
        return this.db.read().users;
    }

    getUserById(id) {
        return this.db.read().users.find(user => user.id === id);
    }
    
    addUser(user) {
        const db = this.db.read();
        const newId = db.users.length > 0 ? db.users[db.users.length - 1].id + 1 : 1;
        const newUser = { id: newId, ...user };
        db.users.push(newUser);
        this.db.write(db);
        return newUser;
    }
}

module.exports = UserService;