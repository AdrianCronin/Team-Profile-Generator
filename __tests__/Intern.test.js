const Intern = require('../lib/intern');

describe("Engineer", () => {
    const name = "Peter";
    const id = 999;
    const email = "Peter@UW.edu";
    const school = "University of Washington";

    describe("Initialization", () => {
        it("Should create a new Intern subclass object with property values from the given arguments", () => {
            const intern = new Intern({ name, id, email, school });
            expect(intern).toEqual({ name: name, id: id, email: email, school: school, role: 'Intern' });
        });
    });

    // Verify `getName()` function returns the Intern's name
    describe("getName", () => {
        it("Should return the Intern object's name property", () => {
            const intern = new Intern({ name, id, email, school });
            expect(intern.getName()).toEqual(name);
        });
    });

    // Verify `getId()` function returns the Intern's id
    describe("getId", () => {
        it("Should return the Intern object's id property", () => {
            const intern = new Intern({ name, id, email, school });
            expect(intern.getId()).toEqual(id);
        });
    });

    // Verify `getEmail()` function returns the Intern's email
    describe("getEmail", () => {
        it("Should return the Intern object's email property", () => {
            const intern = new Intern({ name, id, email, school });
            expect(intern.getEmail()).toEqual(email);
        });
    });

    // Verify `getRole()` function returns the Intern's role
    describe("getRole", () => {
        it("Should return the Intern object's role property", () => {
            const intern = new Intern({ name, id, email, school });
            expect(intern.getRole()).toEqual("Intern");
        });
    });

    // Verify `getSchool()` function returns the Intern's School
    describe("getSchool", () => {
        it("Should return the Intern object's school property", () => {
            const intern = new Intern({ name, id, email, school });
            expect(intern.getSchool()).toEqual(school);
        });
    });

});