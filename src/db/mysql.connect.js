const Sequelize = require('sequelize');
const { db: { username, password, database, host, dialect } } = require('../config/config');


class Database {
    constructor () {
        this.connect();
    }

    connect() {
        const sequelize = new Sequelize(database, username, password, {
            host,
            dialect,
            logging: console.log, // Đặt logging thành console.log để log các truy vấn SQL
            dialectOptions: {
                useUTC: true, // for reading from database
            },
            define: {
                underscored: false,
                freezeTableName: true, //use singular table name
                timestamps: false,  // I do not want timestamp fields by default
            },
        });
        sequelize.sync();

        console.log(sequelize.options);
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



