const Employee = require('./employee');

class Engineer extends Employee {
    constructor({name, id, email, github}) {

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
    }
    // possibly refactor this to return a full gitHub URL
    getGitHub() {
        return this.gitHub
    }
}

module.exports = Engineer;
