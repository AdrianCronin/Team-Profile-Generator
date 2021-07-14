const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;

// const manager = new Manager('adrian', 1337, 'adrian@gmail', 1);

// console.log(manager);