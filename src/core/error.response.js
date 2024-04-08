const { StatusCodes, ReasonPhrases } = require('http-status-codes');


class ErrorResponse extends Error {
    constructor (message, status) {
        super(message);
        this.status = status;
    }
}

class BadRequestError extends ErrorResponse {
    constructor (message = ReasonPhrases.BAD_REQUEST, status = StatusCodes.BAD_REQUEST) {
        super(message, status);
    }
}

class AuthFailError extends ErrorResponse {
    constructor (message = ReasonPhrases.UNAUTHORIZED, status = StatusCodes.UNAUTHORIZED) {
        super(message, status);
    }
}

class ForbiddenError extends ErrorResponse {
    constructor (message = ReasonPhrases.FORBIDDEN, status = StatusCodes.FORBIDDEN) {
        super(message, status);
    }
}


module.exports = {
    ErrorResponse,
    BadRequestError,
    AuthFailError,
    ForbiddenError
};