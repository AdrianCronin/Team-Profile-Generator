const Employee = require('./employee');

class Manager extends Employee {
    constructor(managerAnswers) {
        const {name, id, email, office} = managerAnswers;

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
}

module.exports = Manager;

// const manager = new Manager('adrian', 1337, 'adrian@gmail', 1);

// console.log(manager);