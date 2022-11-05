const Emplopyee = require("../lib/employee");

const ryan = new Emplopyee(25, "Ryan", "express@gmail.com");

test('Return an Id', () => {
    expect(ryan.id).toBe(25);
});