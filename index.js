const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const generateHTML = require('./src/generateHTML'); // import generated HTML string

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "what is the team manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team managers email?",
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'office',
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "what is the engineer's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "what is the intern's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the intern's?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
    }
];

const addEmployeeQuestion = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'type',
        choices: ['Engineer', 'Intern', "I don't want to add more team members"],
    }
];

// takes the HTML data and creates a new index.html file
// TODO: probably need to make a css file too
const writeHTMLFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, (err) =>
        err ? console.log(err) : console.log(`HTML File created successfully!`))
};

// 
const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            }
        ])
        .then((response) =>
            generateHTML(response)
        )
        .then((response) =>
            writeHTMLFile(response)
        );
}

init();

// prompts
//  Please Build Your Team
    //  What is the team manager's name?
    //  what is the team manager's id?
    //  what is the team managers email?
    //  what is the team managers office number?
    //  (all of this was stored in a manager object/class)

// Which type of team member would you like to add?
    // engineer
        // what is the engineer's name?
        // what is your engineer's id?
        // what is your engineer's email? (email validation)
        // what is your engineer's github username?
        // (re-prompt what type of team member?)
    // intern
        // what is the intern's name?
        // what is your intern's id?
        // what is your intern's email? (email validation)
        // what is your intern's school?
        // (re-prompt what type of team member?)




