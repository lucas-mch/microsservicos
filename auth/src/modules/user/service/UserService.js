import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import userRepository from "../repository/userRepository.js";
import UserException from "../exception/UserException.js";
import * as httpStatus from '../../../config/constants/httpStatus.js'
import * as secrets from '../../../config/constants/secrets.js';

import { isEmpty, defaultErrorResponse } from '../../../config/constants/helper.js'

class UserService {

    async findByEmail(req) {
        try {
            const { email } = req.params;
            this.validateRequestData(email);
            let user = await userRepository.findByEmail(email);
            this.validateUserNotFound(user);
            return {
                status: httpStatus.SUCCESS,
                user: {
                    id: user[0].dataValues.id,
                    nome: user[0].dataValues.name,
                    email: user[0].dataValues.email
                }
            }
        }
        catch (err) {
            return defaultErrorResponse(err);
        }

    }

    async getAccessToken() {
        try {
            const { email, password } = req.body;
            this.validateAccessTokenDate(email, password);
            let user = await userRepository.findByEmail(email);
            this.validateUserNotFound(user);
            await this.validadePassword(password, user.password);
            let authUser = { id: user.id, name: user.name, email: user.email };
            const accessToken = jwt.sign({ authUser }, secrets.API_SECRET, { expiresIn: '1d' })
            return {
                status: httpStatus.SUCCESS,
                accessToken: accessToken
            }
        }
        catch (err) {
            return defaultErrorResponse(err);
        }
    }

    validateAccessTokenDate(email, password) {
        if (isEmpty(email) || isEmpty(password)) {
            throw new UserException(httpStatus.UNAUTHORIZED, 'Email and password must be informed.')
        }
    }

    validateRequestData(email) {
        if (isEmpty(email)) { throw new UserException(httpStatus.BAD_REQUEST, 'User email was not informed.'); }
    }

    validateUserNotFound(user) {
        if (isEmpty(user)) { throw new UserException(httpStatus.BAD_REQUEST, 'User was not found.') }
    }

    async validatePassword(password, hashPassword) {
        if (!await bcrypt.compare(password, hashPassword)) {
            throw new UserException(httpStatus.UNAUTHORIZED, 'Senha inválida.');
        }
    }

}

export default new UserService();