const { Sequelize } = require('../node_modules/sequelize/dist');

const sequelize = new Sequelize("postgres://fkpngfkfcarwiq:16e1c27c1d2f21fa72986c97d025d291444514c99cdd8272320c7515ae1e0e48@ec2-54-224-64-114.compute-1.amazonaws.com:5432/d84jatq5bioted", {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }

})

module.export = sequelize