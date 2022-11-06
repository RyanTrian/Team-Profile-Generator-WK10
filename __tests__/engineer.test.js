const Engineer = require("../lib/engineer");
const Alex = new Engineer( 5, "Alex", "alex@work.com", "AlexAnvil23");

describe('New Engineer', () => {
    it('should create a new Engineer instance', () => {
        const newEngineer = new Engineer();
        expect(newEngineer instanceof Engineer).toBe(true)
    });
    it('should add a github property', () => {
        const { github: Alexgithub } = Alex;
        expect(Alex.github).toBe(Alexgithub);
    });
});

describe('Engineer Methods', () => {
    it('should return github username when use getGithub()', () => {
        const { github: Alexgithub } = Alex;
        expect(Alex.getGithub()).toBe(Alexgithub);
    });
    it('should get role "Engineer" when use getRole()', () => {
        expect(Alex.getRole()).toBe("Engineer")
    });
});