const Intern = require('../lib/intern.js');

describe('intern', () => {
	describe('getSchool', () => {
		it("should get the engineer's github", () => {
			const input = new Intern('sally', '71', 'sallyU@bOfU.com', 'Bethlehem University');

			expect('Bethlehem University').toEqual(input.getSchool());
		});
	})

	describe('getRole', () => {
		it("should get the intern's role", () => {
			const input = new Intern('sally', '71', 'sallyU@bOfU.com', 'Bethlehem University');

			expect('intern').toEqual(input.getRole());
		});
	})

});