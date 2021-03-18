//Dependencies

const mysql = require('mysql');
const express = require('express');
const path = require("path");
const inquirer = require('inquirer');
const fs = require('fs');
const table = require('console.table');
const Employee = require('./lib/departments')




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
    // connection.end();

    //showDept();

    setTimeout(start, 1000);
});

function showDept() {
    connection.query("SELECT * FROM departments", function (err, res, fields) {
        if (err) throw err;
        console.table(res);
    })
    connection.end()
}



function start() {
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "Welcome please select an option",
        choices: ["Add Department", "Add Role", "Add Employee",
            "View Departments", "View list of Employees",
            "View list of Employees by Department", "View Roles",
            "Exit",]
    })
        .then(function (answer) {
            if (answer.start === "Add Department") {
                addDepartment()

            } else if (answer.start === "Add Role") {
                addRole()

            } else if (answer.start === "View Departments") {
                viewDepartments()

            } else if (answer.start === "View Roles") {
                viewRoles()

            } else if (answer.start === "Add Employee") {
                addEmployee()

            } else if (answer.start === "View list of Employees") {
                viewEmployee()

            } else if (answer.start === "View list of Departments") {
                viewDept()

            } else if (answer.start === "Remove Employee") {
                remEmployee()

                //  console.log("employees");
            } else {
                console.log("Thank you!")
                // connection.end();
            }

        })


}
function addDepartment() {
    inquirer.prompt({
        name: "newDepartmentName",
        type: "input",
        message: "Add new Department",

    })

        .then(function (answer) {
            console.log(answer)
            connection.query(`INSERT INTO departments(depart_name)VALUES ("${answer.newDepartmentName}")`, function (err, res, fields) {
                start()

            })
        })


}


function viewDepartments() {

    connection.query("SELECT * FROM departments", function (err, res, fields) {
        if (err) throw err;
        console.table(res)
        return res;
    })
    start()


}
function addRole() {
    connection.query("SELECT * FROM departments", function (err, res, fields) {
        if (err) throw err;
        console.table(res)
        const departmentNames = res.map(row => row.depart_name)
        inquirer.prompt([
            {
                name: "newTitle",
                type: "input",
                message: "Add new Role",

            },
            {
                name: "newSalary",
                type: "number",
                message: "Add starting salary",

            },
            {
                name: "department",
                type: "list",
                message: "Select a department",
                choices: departmentNames

            }
        ])

            .then(function (answer) {
                console.log(answer)
                let filteredDepartments = res.filter(row => row.depart_name === answer.department)
                console.log(filteredDepartments[0])
                let id = filteredDepartments[0].id
                connection.query(`INSERT INTO role(department_id, salary, title)VALUES (${id},${answer.newSalary},"${answer.newTitle}")`, function (err, res, fields) {
                    start()

                })
            })

    })



}
function viewRoles() {

    connection.query("SELECT * FROM role", function (err, res, fields) {
        if (err) throw err;
        console.table(res)
        return res;
    })
    start()


}

function addEmployee() {
    console.log("employee")




}
function viewEmployee() {
    console.log("employee")
    connection.query("SELECT * FROM employee", function (err, res, fields) {
        if (err) throw err;
        console.table(res);
    })
    connection.end()

}
function viewDept() {
    console.log("employee")

}
function remEmployee() {
    console.log("employee")

}








