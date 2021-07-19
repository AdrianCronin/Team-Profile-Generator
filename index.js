const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const generateHTML = require('./src/generateHTML'); // import generated HTML string
const Manager = require('./lib/manager'); // Manager subclass
const Engineer = require('./lib/engineer'); // Engineer subclass
const Intern = require('./lib/intern'); // Intern subclass

// Uses these prompts when creating a Manager object
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
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'officeNumber',
    }
];

// Uses these prompts when creating an Engineer object
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
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        },
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
        validate: function(github) {
            return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(github); // will check if follows github account name constraints
        },
    }
];

// Uses these prompts when creating an Intern object
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
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        },
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
    }
];

// Prompts the User on what to do next
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
        employees.push(engineer); // save engineer object into employees[]

        return askNextAction();
    });

//  if intern selected run these prompts
const askInternQuestions = () => inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {

        // build new intern object with `internAnswers`
        const intern = new Intern(internAnswers);
        employees.push(intern); // save intern object to employees[]         

        return askNextAction();
    });

// takes the HTML data and creates a new index.html file
const writeHTMLFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, (err) =>
        err ? console.log(err) : console.log(`HTML File created successfully!`))
};

// function initializes app, starts by prompting for the team Manager's information
const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerAnswers) => {

            // create new manager object with  `managerAnswers`
            const manager = new Manager(managerAnswers);
            employees.push(manager); // save manager object to employees[]

            return askNextAction();
        })
        .then(() =>
            generateHTML(employees) // pass employees[] into generateHTML
        )
        .then((data) => {
            writeHTMLFile(data) // accepts generated html and writes it to a new file
        })
        .catch((error) => {
            console.error(error);
        });
};

init();