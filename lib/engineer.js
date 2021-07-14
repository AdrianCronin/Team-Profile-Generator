const Employee = require('./employee');

class Engineer extends Employee {
    constructor(engineerAnswers) {
        const {name, id, email, github} = engineerAnswers;

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = github;
    }
}

module.exports = Engineer;

// const engineer = new Engineer('adrian', 1337, 'adrian@gmail', "AdrianCornin");

// console.log(engineer);