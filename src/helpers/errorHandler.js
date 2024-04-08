const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const errorHandler = (error, req, res, next) => {
    console.log(error.stack);

    return res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
    });
};


module.exports = errorHandler;