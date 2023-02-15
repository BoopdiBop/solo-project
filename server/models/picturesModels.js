const { Router, application } = require('express');
const express = require('express');
const router = express.Router();
// import mysql
const mysql = require('mysql2');
// so you can use the constants found in .env in server folder
const dotenv = require('dotenv');
dotenv.config();

// pool is a collection of connections to the database, we can reuse these connections to make queries
const pool = mysql.createPool({
    // localhost does not work for whatever reason, but 127.0.0 is good
    // HOST will change depending on the environment in which you deploy
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE
}).promise();

/*
pool.query(
    'SELECT * FROM pictures;',
    function(err, results, fields) {
        if (err) {console.log(err)}
        else {  
            // logs an array of rows (each row is an object with caption and url keys)
            console.log(results);
            // console.log(fields); //metadata
            }
        }
)
*/

/*
pool.query(
    'SELECT * FROM pictures WHERE caption=?',
    ['webpack']
)
.then((results) => {
    // get only the rows, not any metadata
    console.log(results[0]);
})
.catch(err => console.log(err.sqlMessage));
*/

// pass this onto picturesController to retrieve and process data
module.exports = {
    query: (text, params, callback) => {
        console.log('query: ', text);
        return pool.query(text, params, callback);
    }
}
