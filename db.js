const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ashith2527',   // ✅ empty string since no password
    database: 'smart_library'
});


connection.connect((err) => {
    if (err) throw err;
    console.log('✅ MySQL Connected...');
});

module.exports = connection;
