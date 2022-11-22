let generateMarkdown = require ('./utils/generateMarkdown');

// Packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');

let promptUser = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'project',
                message: 'Enter your project name: '
        
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining the what, why, and how of your project: '
            },
            {
                type: 'input',
                name: 'screenshot',
                message: 'Provide a relative path to screenshot of your application. It will be added to Description section: '
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
                name: 'username',
                message: 'Enter your GitHub User Name: '
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address: ',
                validate: function (email) {
                    // valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                    valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
                    if (valid) {
                        return true;
                    } else {
                        console.log(" - incorrect format. Please enter a valid email")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'credits',
                message: 'For section Credits list your collaborators, if any, with links to their GitHub profiles. If you followed tutorials, include links to those here as well: '
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Add guidelines for contribution: ',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Tests section. Provide examples on how to run tests: '
            },
        ]
    )
}


// Function to write README file
function writeToFile(fileName, answers) {
    data = JSON.parse(answers);
    let content = generateMarkdown(data);
    
    try {
        fs.writeFileSync(fileName, content);
    } catch (error) {
        console.log(error);
    }
}

// Function to initialize app
let init = () => {
    promptUser()
    .then((responses) => {
        answers = JSON.stringify(responses);
        writeToFile('./dist/README.md', answers)})
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
