require('dotenv').config();
const { CONNECTION_STRING } = process.env
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            // require: true,
            rejectUnauthorized: false
        }
    }

})

//const {sequelize} = require('./sequelize');
const bcryptjs = require('bcryptjs');

module.exports= {
    createUser: async (req, res) => {
        let {name, email, password} = req.body;
        
        const checkUser = await sequelize.query(`
            SELECT * FROM users
            WHERE email = '${email}'
        `);

        if(checkUser[1].rowCount !== 0) {
            res.status(500).send('User already exists.')
        } else {
            const salt = bcryptjs.genSaltSync(10)
            const passwordHash = bcryptjs.hashSync(password, salt)
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
    },

    loginUser: async(req, res) => {
        let { email, password } = req.body
        const validUser = await sequelize.query(`
            SELECT * FROM users
            WHERE email = ' ${email}'
        `)
        //console.log(validUser)
        if(validUser[1].rowCount === 1) {
            if(bcryptjs.compareSync(password, validUser[0][0].password)) {
                let object = {
                    id: validUser[0][0].id,
                    name: validUser[0][0].name,
                    email: validUser[0][0].email
                }
                res.status(200).send(object)
            } else {
                res.status(500).send('Password Incorrect')
            }
        } else {
            res.status(401).send('We do not recognize that email address. Please enter a valid email address.')
        }
    },

    uploadInfo: async (req, res) => {
        let { user_id, image_Url, actionValue, description, createdAt } = req.body

        await sequelize.query(`
            INSERT INTO uploads (image_Url, createat, actionValue, description, user_id)
            VALUES ('${image_Url}', '${createdAt}', ${actionValue}, '${description}', ${user_id});
        `).catch(err => console.log(err))

        res.status(200).send('success')
    }
}