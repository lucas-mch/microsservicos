import * as httpStatus from './httpStatus.js';

const isEmpty = (entity) => {
    return entity === null || entity.length === 0 || entity === undefined;
}

const defaultErrorResponse = (err) => {
    return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.msg,
    }
}

export { isEmpty , defaultErrorResponse };