const LoggerMiddleware = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware or route
};

module.exports = LoggerMiddleware;