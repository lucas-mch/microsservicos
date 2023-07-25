import User from "../model/User.js";

class UserRepository {

    async findById(id) {
        try {
            return await User.findOne({ where: id });
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    async findByEmail(email) {
        try {
            return await User.findAll({ where:{
                email: email
            }});
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

export default new UserRepository();