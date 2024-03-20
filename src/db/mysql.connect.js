const Sequelize = require('sequelize');
const { db: { username, password, database, host, dialect } } = require('../config/config');


class Database {
    constructor () {
        this.connect();
    }

    connect() {
        const sequelize = new Sequelize(database, username, password, {
            host,
            database,
            dialect,
            dialectOptions: {
            },
            loggingLevels: ['sql', 'warn', 'infor'],
            define: {
                freezeTableName: true,
                underscored: false,
            },
            timezone: "Asia/Calcutta"
        });

        sequelize.sync();
        console.log("connect mysql success!");

        this.sequelize = sequelize;
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    getSequelize() {
        return this.sequelize;
    }

}


const mysqlInstance = Database.getInstance();
module.exports = mysqlInstance.getSequelize();

