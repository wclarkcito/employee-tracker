//Dependencies

const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const path = require("path");

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,


    user: 'root',


    password: '1250Mesard!',
    database: 'employee_db',
});

const afterConnection = () => {
    connection.query('SELECT * FROM`employee_db`', (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
});