require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const { SERVER_PORT } = process.env

//middleware
app.use(express.json());
app.use(cors());

//destructured functions from controller file
const {createUser} = require("./controller")

//endpoints go here
app.post("/register", createUser)

// sequelize.authenticate()
app.listen(SERVER_PORT, ()=>console.log(`Server is JAMMIN on port ${SERVER_PORT}`));