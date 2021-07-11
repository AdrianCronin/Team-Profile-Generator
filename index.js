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

const nextActionQuestion = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add more team members"],
    }
];

// takes the HTML data and creates a new index.html file
// TODO: probably need to make a css file too
const writeHTMLFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, (err) =>
        err ? console.log(err) : console.log(`HTML File created successfully!`))
};

// prompts the user add an Engineer or Intern or Stop adding
const askNextAction = () => inquirer
    .prompt(nextActionQuestion)
    .then((nextActionAnswers) => {

        //  use answer to decide what do next.
    })


// function initializes app
const init = () => {
    inquirer
        .prompt(managerQuestions])
        .then((managerAnswers) => {
            // create new manager object with  `managerAnswers`


            return askNextAction();
}
        )
        .then((response) =>
    writeHTMLFile(response)
);
}

init();

// prompts the user for the manager information using our `managerquestions`

    // THEN we need to create a new manager object with that response data

    // THEN ask the user what they want to do next (prompt with nextActionQuestion)

        // THEN use their answer to decide what to do next.




