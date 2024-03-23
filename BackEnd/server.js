const express = require('express');
const cors = require('cors');     //cors required to access this internet address and socket, from other page
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
// const dotenv = require('dotenv').config();
app.use(cors())
app.use(bodyParser.json());

const config = require('./config');
const dbConfig = config.db;



sql.connect(dbConfig, function (err) {

    if (err) console.log('Error',err);

    console.log("user: ",dbConfig.user);

    console.log("Connected");
});

app.get('/api/get', (req, res) => {
    console.log("in the get api")
    const request = new sql.Request();
    request.query('SELECT * FROM SleepRecord', (err, data) => {
        if (err) console.log("There is an error",err);
        // console.log(data)
        res.send(data);
    });
});

app.post('/api/insert', (req, res) => {
    const request = new sql.Request();
    console.log()
    request.query(`INSERT INTO SleepRecord (date, hours) VALUES ('${req.body.date}', 
    '${req.body.hours}')`, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});


