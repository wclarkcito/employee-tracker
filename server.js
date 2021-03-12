//Dependencies

const mysql = require('mysql');
const express = require('express');
const path = require("path");
const inquirer = require('inquirer');
const fs = require('fs');
const table = require('console.table');



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

    //showDept();

    setTimeout(start, 1000);
});

function showDept() {
    connection.query("SELECT * FROM departments", function (err, res, fields) {
        if (err) throw err;
        console.table(res);
    })
}

function start() {
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "Welcome please select what you would like to do",
        choices: ["Add Department", "Add Role", "List of Employees", "Exit"]
    })
        .then(function (answer) {
            if (answer.start === "Add Department") {
                addDepartment();
            } else if (answer.start === "Add Role") {
                addRole();
                console.log("role");
            } else if (answer.start === "List of Employees") {
                addEmployee();
                console.log("employees");
            } else {
                console.log("Thank you!")
                connection.end();
            }
        })
}

function addDepartment() {
    console.log("department");
}

function addRole() {
    console.log("role");
}

function addEmployee() {
    console.log("employees");
}