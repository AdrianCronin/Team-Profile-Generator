const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}

module.exports = Intern;

// const intern = new Intern('adrian', 1337, 'adrian@gmail', "UW");

// console.log(intern);