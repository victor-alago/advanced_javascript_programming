const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Users/User'); 
const SECRET_KEY = 'my_super_secret_key';

class AuthService {
    constructor(userService) {
        this.userService = userService;
    }

    async login(email, password) {
        console.log('Login attempt for:', email); // Debugging
        const user = await this.userService.getUserByEmail(email);
    
        if (!user) {
            throw new Error('Invalid email or password');
        }   
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }
    
        const token = this.generateToken(user);
        return {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            token,
        };
    }

    generateToken(user) {
        return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    }


    async register(name, email, password) {
        // Check if user with this email already exists
        const existingUser = await this.userService.getUserByEmail(email);

        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return newUser;
    }

    
    logout() {
        // Simplified logout: no server-side state management
        return { message: 'Logged out successfully' };
    }
}

module.exports = AuthService;