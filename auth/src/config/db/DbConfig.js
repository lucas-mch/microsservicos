import Sequelize from 'sequelize';

const sequelize = new Sequelize('auth-db', "admin", "123456", {
    host: "localhost",
    port: 5433,
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    }
});

sequelize.authenticate().then(() => {
    console.log('authenticated');
}).catch((err) => {
    console.error(err);
});

export default sequelize;
