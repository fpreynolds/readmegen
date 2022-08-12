// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What`s the name of your project?',
        validate: inputProject => {
            if (inputProject) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of the project',
        validate: inputDescription => {
            if (inputDescription) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should this application be installed?',
        validate: inputInstallation => {
            if (inputInstallation) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }
            
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give a brief description of the usage of the project',
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }
            
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['ISC', 'GNU', 'MIT', 'Mozilla', 'none'],
        validate: inputLicense => {
            if (inputLicense) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should one contribute to this project?',
        validate: inputContribution => {
            if (inputContribution) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How will this be tested?',
        validate: inputTesting => {
            if (inputTesting) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }

        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What`s your Github username?',
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }
    
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What`s your email address?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('invalid entry');
                return false;
            }
    
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("file created")
);
};
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((data) => {
    writeToFile("README.md", generateMarkdown(data));
});
};

// Function call to initialize app
init();
