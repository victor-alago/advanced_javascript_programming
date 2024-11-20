const AuthMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Validate the token (for demonstration, use a hardcoded token)
    if (token !== 'Bearer valid-token') {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    next(); // If valid, proceed to the next middleware or route
};

module.exports = AuthMiddleware;