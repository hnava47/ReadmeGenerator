const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Provide the title of the project:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide description of the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide installation instructions of the project:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide usage information of the project:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines of the project:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide test instructions of the project',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select license type:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Provide GitHub username:',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'Provide email:',
        name: 'email'
    }
];

const init = () => {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile('README.md', markdown(response), (err) =>
            err ? console.error(err) : console.log('Readme successfully created!')
        );
    });
}

init();
