const ErrorMiddleware = (err, req, res, next) => {
    console.error(`[ERROR]: ${err.message}`);

    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500
        }
    });
};

module.exports = ErrorMiddleware;