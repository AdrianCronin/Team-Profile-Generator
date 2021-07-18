const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    const name = "Gustavo";
    const id = 43;
    const email = "Gustavo@Engineermail.com";
    const github = "GustavoDev";

    describe("Initialization", () => {
        it("Should create a new Engineer subclass object with property values from the given arguments", () => {
            const engineer = new Engineer({ name, id, email, github });
            expect(engineer).toEqual({ name: name, id: id, email: email, github: github, role: 'Engineer' });
        });
    });

    // Verify `getName()` function returns the Engineer's name
    describe("getName", () => {
        it("Should return the Engineer object's name property", () => {
            const engineer = new Engineer({ name, id, email, github });
            expect(engineer.getName()).toEqual(name);
        });
    });

    // Verify `getId()` function returns the Engineer's id
    describe("getId", () => {
        it("Should return the Engineer object's id property", () => {
            const engineer = new Engineer({ name, id, email, github });
            expect(engineer.getId()).toEqual(id);
        });
    });

    // Verify `getEmail()` function returns the Engineer's email
    describe("getEmail", () => {
        it("Should return the Engineer object's email property", () => {
            const engineer = new Engineer({ name, id, email, github });
            expect(engineer.getEmail()).toEqual(email);
        });
    });

    // Verify `getRole()` function returns the Engineer's role
    describe("getRole", () => {
        it("Should return the Engineer object's role property", () => {
            const engineer = new Engineer({ name, id, email, github });
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

    // Verify `getGitHub()` function returns the Engineer's GitHub username
    describe("getGitHub", () => {
        it("Should return the Engineer object's GitHub username property", () => {
            const engineer = new Engineer({ name, id, email, github });
            expect(engineer.getGitHub()).toEqual(github);
        });
    });

});