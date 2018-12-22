const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios")
const db = require('../database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/:rest_id', (req, res) => {
    db.getAllMenuItems(req.params["rest_id"], (data) => res.status(200).send(data));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

module.exports = {
    app
}