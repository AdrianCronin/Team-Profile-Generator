const inquirer = require('inquirer'); // inquirer module
const fs = require('fs'); // file system module

// takes the HTML data and creates a new index.html file
// TODO: probably need to make a css file too
const writeHTMLFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, (err) => 
        err ? console.log(err) : console.log(`HTML File created successfully!`))
};