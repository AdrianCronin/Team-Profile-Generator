const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module
const generateHTML = require('./src/generateHTML'); // import generated HTML string

// takes the HTML data and creates a new index.html file
// TODO: probably need to make a css file too
const writeHTMLFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, (err) =>
        err ? console.log(err) : console.log(`HTML File created successfully!`))
};

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