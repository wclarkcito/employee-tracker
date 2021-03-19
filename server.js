//Dependencies

const mysql = require('mysql');
const express = require('express');
const path = require("path");
const inquirer = require('inquirer');
const fs = require('fs');
const table = require('console.table');
//const Employee = require('./lib/departments')




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
            "View Roles",
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


                //  console.log("employees");
            } else {
                console.log("Thank you!")
                connection.end();
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
            connection.query(`INSERT INTO departments(depart_name)VALUES ("${answer.newDepartmentName}")`,
                function (err, res, fields) {
                    if (err) throw err;
                    console.log(answer.newDepartmentName + " department(s) added!");
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
    connection.query("SELECT * FROM role", function (err, res, fields) {
        if (err) throw err;
        console.table(res)
        const roleNames = res.map(row => row.title)
        inquirer.prompt([
            {
                name: "title",
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
                choices: roleNames

            }
        ]).then(function (answers) {
            console.log(answers);
            connection.query(
                "INSERT INTO role SET ?", {
                Title: answers.Title,
                Salary: answers.Salary,
                department: answers.department,
            },
                function (err, res) {
                    if (err) throw err;
                    console.log(res)
                }
            )
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
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is your first name?",
            },
            {
                name: "last_name",
                type: "input",
                message: "What is your last name?",
            },
            {
                name: "role_id",
                type: "list",
                message: "What role id",
                choices: ["1", "2", "3", "4"]
            },
            {
                name: "manager_id",
                type: "list",
                message: "Select your manager id",
                choices: ["1", "2", "4", "5"]
            },

        ])
        .then(function (answer) {

            console.log(answer)
            connection.query(
                "INSERT INTO employee SET ?", {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            },
                function (err, res, fields) {
                    if (err) throw err;
                    console.table(res)
                    return res;


                })
            //start()

        })


}




function viewEmployee() {
    console.log("employee")
    connection.query("SELECT * FROM employee", function (err, res, fields) {
        if (err) throw err;
        console.table(res);
    })
    connection.end()

}










