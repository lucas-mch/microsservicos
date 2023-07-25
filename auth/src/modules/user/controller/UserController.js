import UserService from '../service/userService.js';

class UserController {

    async getAccessToken(req,res) {
        
    }

    async findByEmail(req, res) {
        let user = await UserService.findByEmail(req);
        return res.status(user.status).json(user);
    }
}


export default new UserController();