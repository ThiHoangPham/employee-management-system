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
                'View Department Budgets',
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
            if { choices }
        })
}