const Employee = require('../lib/employee');

describe("Employee", () => {
    const name = 'Bob';
    const id = 1;
    const email = 'Bob@gmail.com';

    // Verify an Employee is created with the correct property values from the given arguments
    describe("Initialization", () => {
        it("Should create a new Employee object with property values from the given arguments", () => {
            const employee = new Employee(name, id, email);
            expect(employee).toEqual({ name: name, id: id, email: email, role: 'Employee' });
        });

    });

    // Verify `getName()` function returns the Employee's name
    describe("getName", () => {
        it("Should return the Employee object's name property", () => {
            const employee = new Employee(name, id, email);
            expect(employee.getName()).toEqual(name);
        });
    });

    // Verify `getId()` function returns the Employee's id
    describe("getId", () => {
        it("Should return the Employee object's id property", () => {
            const employee = new Employee(name, id, email);
            expect(employee.getId()).toEqual(id);
        });
    });

    // Verify `getEmail()` function returns the Employee's email
    describe("getEmail", () => {
        it("Should return the Employee object's email property", () => {
            const employee = new Employee(name, id, email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    // Verify `getRole()` function returns the Employee's role
    describe("getRole", () => {
        it("Should return the Employee object's role", () => {
            const employee = new Employee(name, id, email);
            expect(employee.getRole()).toEqual("Employee");
        });
    });

});