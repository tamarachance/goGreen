const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//destructured functions from controller file
const {createUser} = require("./controller")

//endpoints go here
app.post("/register", createUser)

// sequelize.authenticate()
app.listen(PORT, ()=>console.log(`Server is JAMMIN on port ${PORT}`));