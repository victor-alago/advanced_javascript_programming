const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_super_secret_key';

const AuthMiddleware = {
    authenticateToken: (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Verify and decode the token
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid token' });
            }

            // Attach the user ID to the request
            req.user = { id: decoded.id };
            next();
        });
    }
};

module.exports = AuthMiddleware;