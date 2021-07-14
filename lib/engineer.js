const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;

// const engineer = new Engineer('adrian', 1337, 'adrian@gmail', "AdrianCornin");

// console.log(engineer);