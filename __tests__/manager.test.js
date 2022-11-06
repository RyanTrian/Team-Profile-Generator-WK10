const Manager = require("../lib/manager");
const Ryan = new Manager(25, "Ryan", "express@gmail.com", 1);

describe('New Manager instance', () => {
   it('should make a new instance of Manager', () => {
      const newManager = new Manager();
      expect(newManager instanceof Manager).toBe(true);
   }); 
   it('should add an officeNumber property', () => {
      const { officeNumber } = Ryan;
      expect(officeNumber).toBe(1); 
   });
});

describe('Manager methods', () => {
   it('should return office number when use getOffice()', () => {
      const { officeNumber } = Ryan;
      expect(Ryan.getOffice()).toBe(officeNumber);
   });
   it('should return "Manager" when use getRole()', () => {
      expect(Ryan.getRole()).toBe("Manager");
   });
});