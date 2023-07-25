import Sequelize from 'sequelize';

import sequelize from '../../../config/db/DbConfig.js';

const User = sequelize.define(
    "users",
    {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false            
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false            
        },
    },
    {}
);

export default User;