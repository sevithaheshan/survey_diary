const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1994@Rasika',
    database: 'surveydiary'
});

db.connect(function(err){
    if (err) throw err;
    console.log("Database connected!")
});


module.exports = db;
