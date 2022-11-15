const inquirer = require('inquirer');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generatePage = require('./src/create-teampage');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team-profile-list.html");
const team = [];

const managerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name.',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Error! Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter your employee ID number.',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Error! Please enter your employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Error! Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number.',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Error! Please enter your office number.');
                    return false;
                }
            }
        },
    ]).then(input => {
        console.log(input);
        const manager = new Manager(input.name, input.employeeId, input.email, input.officeNumber);
        team.push(manager);
        displayOptions();
    })
};

const displayOptions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an option:',
            choices: ['Add Engineer', 'Add Intern', 'Create Team']
        }])
        .then(options => {
            switch (options.menu) {
                case "Add Engineer":
                    engineerInput();
                    break;
                case "Add Intern":
                    internInput();
                    break;
                default:
                    createTeam();
            }
        });
};

const engineerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Please enter engineer's name`,
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log(`Error! Please enter engineer's name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: `Please enter engineer's employee ID number.`,
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log(`Error! Please enter engineer's ID number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter engineer's email.`,
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log(`Error! Please enter engineer's email.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `Please enter engineer's GitHub username.`,
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log(`Error! Please enter engineer's GitHub username.`);
                    return false;
                }
            }
        }
    ]).then(input => {
        console.log(input);
        const engineer = new Engineer(input.name, input.employeeId, input.email, input.github);
        team.push(engineer);
        displayOptions();
    })
};

const internInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Please enter intern's name.`,
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log(`Error! Please enter intern's name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: `Please enter intern's employee ID number.`,
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log(`Error! Please enter intern's employee ID number.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter intern's email address.`,
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log(`Error! Please enter intern's email address.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Please enter intern's school name.`,
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log(`Error! Please enter intern's school name`);
                    return false;
                }
            }
        }
    ]).then(input => {
        console.log(input);
        const intern = new Intern(input.name, input.employeeId, input.email, input.school);
        team.push(intern);
        displayOptions();
    })
};

const createTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generatePage(team), "utf-8");
}

managerInput();
