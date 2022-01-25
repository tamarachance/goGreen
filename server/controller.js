const {sequelize} = require('./sequelize');
const { bcrypt } = require('bcryptjs');

module.exports= {
    createUser: async (req, res) => {
        let {name, email, password} = req.body;
        
        const checkUser = await sequelize.query(`
            SELECT * FROM users
            WHERE email = '${email}'
        `);

        if(checkUser[1].rowcount !== 0) {
            res.status(500).send('User already exists.')
        } else {
            const salt = bcrypt.genSaltSync(10)
            const passwordHash = bcrypt.hashSync(password, salt)
            await sequelize.query(`
                INSERT INTO users (name, email, password)
                VALUES (
                    '${name}',
                    '${email}',
                    '${passwordHash}'
                )
            `);

            const userInfo = await sequelize.query(`
                SELECT id, name, email FROM users
                WHERE email = '${email}'
            `);

            res.status(200).send(userInfo)
        }
    }
}