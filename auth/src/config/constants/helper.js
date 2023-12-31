import * as httpStatus from './httpStatus.js';

const isEmpty = (entity) => {
    return entity === null || entity === undefined;
}

const defaultErrorResponse = (err) => {
    console.log(err);
    return {
        status: err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR,
        message: err.msg ? err.msg : 'Internal ' + err.toString(),
    }
}

export { isEmpty , defaultErrorResponse };