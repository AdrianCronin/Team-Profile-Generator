const Manager = require('../lib/manager');

describe("Manager", () => {
    const name = "Tiffany";
    const id = 123;
    const email = "Tiffany@ManagerMail.com";
    const officeNumber = 1;

    describe("Initialization", () => {
        it("Should create a new Manager subclass object with property values from the given arguments", () => {
            const manager = new Manager({ name, id, email, officeNumber });
            expect(manager).toEqual({ name: name, id: id, email: email, officeNumber: officeNumber, role: 'Manager' });
        });
    });

    // Verify `getName()` function returns the Manager's name
    describe("getName", () => {
        it("Should return the Manager object's name property", () => {
            const manager = new Manager({ name, id, email, officeNumber });
            expect(manager.getName()).toEqual(name);
        });
    });

    // Verify `getId()` function returns the Manager's id
    describe("getId", () => {
        it("Should return the Employee object's id property", () => {
            const manager = new Manager({ name, id, email, officeNumber });
            expect(manager.getId()).toEqual(id);
        });
    });

    // Verify `getEmail()` function returns the Manager's email
    describe("getEmail", () => {
        it("Should return the Employee object's email property", () => {
            const manager = new Manager({ name, id, email, officeNumber });
            expect(manager.getEmail()).toEqual(email);
        });
    });

    // Verify `getRole()` function returns the Manager's role
    describe("getRole", () => {
        it("Should return the Employee object's role property", () => {
            const employee = new Manager({ name, id, email, officeNumber });
            expect(employee.getRole()).toEqual("Manager");
        });
    });

    // Verify `getOfficeNumber()` function returns the Manager's office number
    describe("getOfficeNumber", () => {
        it("Should return the Manager object's office number property", () => {
            const employee = new Manager({ name, id, email, officeNumber });
            expect(employee.getOfficeNumber()).toEqual(officeNumber);
        });
    });

});