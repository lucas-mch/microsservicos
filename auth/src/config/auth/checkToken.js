import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import * as secret from '../constants/secrets.js';
import * as httpStatus from '../constants/httpStatus.js';
import { isEmpty, defaultErrorResponse } from '../constants/helper';

import AuthException from './AuthException.js';

const bearer = 'bearer ';

export default async (req, res, next) => {
    try {
        const { Authorization } = req.headers;
        if (isEmpty(Authorization)) {
            throw new AuthException(httpStatus.UNAUTHORIZED, 'Access token was not informed.')
        }
        let accessToken = Authorization;
        if (accessToken.toLowerCase().includes(bearer)) {
            accessToken = accessToken.replace(bearer,'');
        }
        const decoded = await promisify(jwt.verify)(accessToken, secret.API_SECRET);
        req.authUser = decoded.authUser;
        return next();
    }
    catch (err) {
        defaultErrorResponse(err);
    }

};