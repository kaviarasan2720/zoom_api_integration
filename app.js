const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const app = express();
const port = 3000;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
//Use the ApiKey and CLIENT_SECRET from env
const payload = {
    iss: CLIENT_ID,
    exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(payload, config.CLIENT_SECRET);
app.use(express.json());


app.listen(port, () => {
    console.log('Server is running on port 3000');
  });
  