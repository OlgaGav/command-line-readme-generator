// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-name',
        message: 'Enter your project name: '

    },
    {
        type: 'input',
        name: 'github-username',
        message: 'Enter your GitHub User Name: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log(". Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide a relative path to screenshot of your application. It will be added to Description section'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation notes:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Instructions and examples for use: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license: ',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause “Simplified” License',
            'BSD 3-Clause “New” or “Revised” License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests: '
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (typeof(data) != String) {
        data = JSON.stringify(data);
    }
    fs.writeFile(fileName, data, (error) => console.log(error));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt(questions).then((answers) => console.log (answers));
