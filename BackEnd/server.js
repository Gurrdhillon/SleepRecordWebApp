const express = require('express');
const cors = require('cors')        //cors required to access this internet address and socket, from other page
const sql = require('mssql');
const app = express();
app.use(cors())

const config = {
    user: 'gursevaks',
    password: 'Waheguru@1',
    server: 'gursevak1database.database.windows.net',
    database: 'g1'
};

sql.connect(config, function (err) {
    if (err) console.log('Error',err);
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
    request.query(`INSERT INTO SleepRecord (date, hours) VALUES ('${req.body.date}', '${req.body.hours}')`, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});


