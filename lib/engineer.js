const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;