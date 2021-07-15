class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    }

    // accept this.name as argument and return it
    getName() {
        return this.name
    }

    // accept this.id as an argument and return it
    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }
}

module.exports = Employee;