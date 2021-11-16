// variables function
const connection = require('./config/connection');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const validate = require('./utils/validate');

// start title
connection.conmect((error) => {
    if (error) throw error;
    console.log(chalk.blueBright.bold(`====================================================================================`));
    console.log(chalk.blueBright.bold(`=                                                                                  =`));
    console.log(chalk.blueBright.bold(`=                                                                                  =`));
    console.log(chalk.blueBright.bold(figlet.textSync('EmployeeS Tracker')));
    console.log(chalk.blueBright.bold(`=                                                                                  =`));
    console.log(chalk.blueBright.bold(`=                                                                                  =`));
    console.log(chalk.blueBright.bold(`====================================================================================`));
    promptUser();
});

// Choices menu
const promptUser = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please select an option:',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'View All Employees By Department',
                'Update Employee Role',
                'Update Employee Manager',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Remove Employee',
                'Remove Role',
                'Remove Department',
                'Exit'
            ]
        }
    ])
        .then((answers) => {
            const { choices } = answers;
            if (choices === 'View All Employees') {
                viewAllEmployees();
            }
            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View All Employees By Department') {
                viewEmployeesByDepartment();
            }
            if (choices === 'Add Employee') {
                addEmployee();
            }
            if (choices === 'Remove Employee') {
                removeEmployee();
            }
            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }
            if (choices === 'Update Employee Manager') {
                updateEmployeeManager();
            }
            if (choices === 'View All Roles') {
                viewAllRoles();
            }
            if (choices === 'Add Role') {
                addRole();
            }
            if (choices === 'Remove Role') {
                removeRole();
            }
            if (choices === 'Add Department') {
                addDepartment();
            }
            if (choices === 'Remove Department') {
                removeDepartment();
            }
            if (choices === 'Exit') {
                connection.end();
            }
        });
};

// function view all employees
const viewAllEmployees = () => {
    const sql = `SELECT 
        employee.id,
        employee.first_name,
        employee_lastname,
        role.title,
        department.department_name AS 'department',
        role.salary
        FROM employee, role, department
        WHERE department.id = role.department_id
        AND role.id = employee.role_id
        ORDER BY employee.id ASC`;
    connection.promise().query(sql, (error, response) => {
        if (error) throw error;
        console.log(`                              ` + chalk.blueBright.bold(`All Current Employees:`));
        console.table(response);
        promptUser();
    });
};

// function view roles
const viewAllRoles = () => {
    console.log(`                              ` + chalk.blueBright.bold(`All Current Employee Roles:`));
    const sql = `SELECT role.id, role.title, department.department_name AS department
                    FROM role
                    INNER JOIN department ON role.department_id = department.id`;
    connection.promise().query(sql, (error, response) => {
        if (error) throw error;
        response.forEach((role) => { console.log(role.title); });
        promptUser();
    });
};

// function view all departments
const viewAllDepartments = () => {
    const sql = `SELECT department.id AS id, department.department_name AS department FROM department`;
    connection.promise().query(sql, (error, response) => {
        if (error) throw error;
        console.log(`                              ` + chalk.blueBright.bold(`All Current Departments:`));
        console.table(response);
        promptUser();
    });
};

// function 