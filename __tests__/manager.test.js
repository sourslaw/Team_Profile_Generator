const Manager = require('../lib/manager.js');

describe('manager', () => {
	describe('officeNumber', () => {
		it("should get the manager's role", () => {
			const input = new Manager('john', '23', 'baller2K@me.com' , '5557659078');

			expect('5557659078').toEqual(input.officeNumber);
		});
	})

	describe('getRole', () => {
		it("should get the manager's role", () => {
			const input = new Manager('john', '23', 'baller2K@me.com' , '5557659078');

			expect('manager').toEqual(input.getRole());
		});
	})

});