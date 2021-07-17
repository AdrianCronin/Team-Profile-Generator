const Manager = require('../lib/manager');

describe("Manager", () => {
    const name = "Tiffany";
    const id = 123;
    const email = "Tiffany@ManagerMail.com";
    const officeNumber = 1;

    describe("Initialization", () => {
        it("Should create a new Manager subclass object with name: 'Tiffany' id: '123' email: 'Tiffany@ManagerMail.com' office number: '1' and role: 'Manager' ", () => {
            const manager = new Manager({name, id, email, officeNumber});
            expect(manager).toEqual({name: name, id: id, email: email, officeNumber: officeNumber, role: 'Manager'});
            
            // expect(manager.name).toEqual(name);
            // expect(manager.id).toEqual(id);
            // expect(manager.email).toEqual(email);
            // expect(manager.officeNumber).toEqual(officeNumber);
            // expect(manager.role).toEqual('Manager');
        });
    });

});