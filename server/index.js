require('dotenv').config();
const fs = require('fs');
const util = require('util')
const unlinkFile = util.promisify(fs.unlink) 
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const { SERVER_PORT } = process.env

//middleware
app.use(express.json());
app.use(cors());

//destructured functions from controller file
const {createUser, loginUser, uploadInfo} = require("./controller");

//destructured function from s3 file
const { uploadFile } = require("./s3");

//endpoints  for logging in and registering a user go here
app.post("/register", createUser)
app.post("/login", loginUser)

//endpoints for image uploads go here
app.post("/images", upload.single('image'), async (req, res) => {
    const file = req.file
    // console.log(file)
    let result = await uploadFile(file)
    await unlinkFile(file.path)
    // console.log(result)
    res.status(200).send({ imagePath: `${result.Location}`})
    // console.log(res)
})

app.post("/uploads", uploadInfo)

// sequelize.authenticate()
app.listen(SERVER_PORT, ()=>console.log(`Server is JAMMIN on port ${SERVER_PORT}`));