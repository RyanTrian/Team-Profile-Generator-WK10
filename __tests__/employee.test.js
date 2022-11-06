const Employee = require("../lib/employee");

describe('New Employee instance', () => {
    it('should create a new instance of Employee', () => {
        const newEmployee = new Employee();
        expect(typeof newEmployee).toBe("object");
    });
    it('should add an id key', () => {
        const id = 1;
        const Alex = new Employee(id);
        expect(Alex.id).toBe(id);
    });
    it('should add a name key', () => {
        const name = "Alex"
        const Alex = new Employee(1, name);
        expect(Alex.name).toBe(name);
    });
    it('should add a email key', () => {
        const email = "alex@work.com";
        const Alex = new Emplopyee(1, "Alex", email);
        expect(Alex.email).toBe(email);
    });
});

describe('Employee methods', () => {
    it('should get id when using getId()', () => {
        const id = 1;
        const Alex = new Employee(id);
        expect(Alex.getId()).toBe(id);
    });
    it('should get name when using getName()', () => {
        const name = "Alex"
        const Alex = new Employee(1, name);
        expect(Alex.getName()).toBe(name);
    });
    it('should get email when using getEmail()', () => {
        const email = "alex@work.com";
        const Alex = new Emplopyee(1, "Alex", email);
        expect(Alex.getEmail()).toBe(email);
    });
    it('should get "Employee" role when use getRole()', () => {
        const role = "Employee";
        const Alex = new Employee();
        expect(Alex.getRole()).toBe(role);
    });
});