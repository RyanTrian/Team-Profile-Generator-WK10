const Intern = require("../lib/intern");
const id = 1;
const name = "Alex";
const email = "alex@work.com";
const Alexschool = "FS school";

describe('New Intern', () => {
    it('should create a new instance of Intern', () => {
        const newIntern = new Intern();
        expect(newIntern instanceof Intern).toBe(true);
    });
    it('should add a school property', () => {
        const Alex = new Intern(id, name, email, Alexschool)
        expect(Alex.school).toBe(Alexschool);
    });
});

describe('Intern Methods', () => {
    it('should return school when use getSchool()', () => {
        const Alex = new Intern(id, name, email, Alexschool);
        expect(Alex.getSchool()).toBe(Alexschool);
    });
    it('should get role "Intern" when use getRole()', () => {
        const Alex = new Intern(id, name, email, Alexschool);
        expect(Alex.getRole()).toBe("Intern")
    });
});