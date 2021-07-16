const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const generateHTML = require('./src/generateHTML'); // import generated HTML string
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
        name: 'officeNumber',
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
        message: "What is the engineer's email?",
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
        message: "What is the intern's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
    }
];

const nextActionQuestion = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'choice',
        choices: ['Engineer', 'Intern', "I don't want to add more team members"],
    }
];

// save new employee objects into this array
const employees = [];

// prompts the user to add an Engineer or Intern or Stop adding
const askNextAction = () => inquirer
    .prompt(nextActionQuestion)
    .then((nextActionAnswers) => {
        if (nextActionAnswers.choice === 'Engineer') {
            return askEngineerQuestions()
        } else if (nextActionAnswers.choice === 'Intern') {
            return askInternQuestions()
        } else {
            return
        }
    });

// if engineer selected run these prompts
const askEngineerQuestions = () => inquirer
    .prompt(engineerQuestions)
    .then((engineerAnswers) => {

        // build new engineer object with `engineerAnswers`
        const engineer = new Engineer(engineerAnswers);
        employees.push(engineer); // push engineer object into employees[]

        return askNextAction();
    });

//  if intern selected run these prompts
const askInternQuestions = () => inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {
        // build new intern object with `internAnswers`
        const intern = new Intern(internAnswers);
        employees.push(intern); // push intern object to employees[]         

        return askNextAction();
    });

// takes the HTML data and creates a new index.html file
// TODO: probably need to make a css file too
const writeHTMLFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, (err) =>
        err ? console.log(err) : console.log(`HTML File created successfully!`))
};

// function initializes app
const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerAnswers) => {

            // create new manager object with  `managerAnswers`
            const manager = new Manager(managerAnswers);
            employees.push(manager); // add manager to employee array

            return askNextAction();
        })
        .then(() => 
            generateHTML(employees) // pass employee object into generateHTML method
        )
        .then((data) =>{
            writeHTMLFile(data) // accept generated html
        });
    // make a catch callback function
}

init();