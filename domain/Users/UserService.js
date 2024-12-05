const User = require('./User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

class UserService {
    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    async getUserProfile(userId) {
        // Validate the ID
        if (!mongoose.isValidObjectId(userId)) {
            console.error('Invalid User ID:', userId); // Debugging
            throw new Error('Invalid User ID');
        }

        // Fetch the user by ID
        const user = await User.findById(userId);
        if (!user) {
            console.error('User not found:', userId); // Debugging
            throw new Error('User not found');
        }

        // Return only necessary fields
        return {
            id: user._id,
            name: user.name,
            email: user.email,
        };
    }

    async updateUserProfile(userId, updatedData) {
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return {
            id: user._id,
            name: user.name,
            email: user.email,
        };
    }
}

module.exports = UserService;