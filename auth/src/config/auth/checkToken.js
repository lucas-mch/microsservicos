import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import * as secret from '../constants/secrets.js';
import * as httpStatus from '../constants/httpStatus.js';
import { isEmpty, defaultErrorResponse } from '../constants/helper.js';

import AuthException from './AuthException.js';

const bearer = 'bearer ';

export default async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (isEmpty(authorization)) {
            throw new AuthException(httpStatus.UNAUTHORIZED, 'Access token was not informed.')
        }
        let accessToken = authorization;
        if (accessToken.toLowerCase().includes(bearer)) {
            accessToken = accessToken.replace('Bearer ', '');
        }
        console.log(accessToken);
        const decoded = await promisify(jwt.verify)(accessToken, secret.API_SECRET);
        req.authUser = decoded.authUser;
        return next();
    }
    catch (err) {
        return res.status(err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR).json(defaultErrorResponse(err));
    }

};