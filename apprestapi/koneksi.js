var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'list_project'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected')
});

module.exports = conn;