const { StatusCodes, ReasonPhrases } = require('http-status-codes');


class SuccessResponse {
    constructor ({
        message,
        statusCode = StatusCodes.OK,
        reasonStatusCode = ReasonPhrases.OK,
        metadata = {},
    }) {
        this.message = !message ? reasonStatusCode : message;
        this.status = statusCode;
        this.metadata = metadata;
    }

    send(res, headers = {}) {
        return res.status(this.status).json(this);
    }
}


class OK extends SuccessResponse {
    constructor ({ message, metadata }) {
        super({ message, metadata });
    }
}

class CREATED extends SuccessResponse {
    constructor ({
        option = {},
        message,
        statusCode = StatusCodes.CREATED,
        reasonStatusCode = ReasonPhrases.CREATED,
        metadata = {},
    }) {
        super({ message, statusCode, reasonStatusCode, metadata });
        this.option = option;
    }
}




module.exports = {
    SuccessResponse,
    OK,
    CREATED
};