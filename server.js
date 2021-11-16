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