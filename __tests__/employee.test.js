const Employee = require('../lib/employee.js');

describe('employee', () => {
	describe('getName', () => {
		it("should get the employee's name", () => {
			const input = new Employee('tom', 'img', '09', 'fart@me.com');

			expect('tom').toEqual(input.getName());
		});
	})

	describe('getId', () => {
		it("should get the employee's id", () => {
			const input = new Employee('tom', 'img', '09', 'fart@me.com');

			expect('09').toEqual(input.getId());
		});
	})

	describe('getEmail', () => {
		it("should get the employee's name", () => {
			const input = new Employee('tom', 'img', '09', 'fart@me.com');

			expect('fart@me.com').toEqual(input.getEmail());
		});
	})

	describe('getRole', () => {
		it("should get the employee's name", () => {	
			const input = new Employee('tom', 'img', '09', 'fart@me.com');

			expect('employee').toEqual(input.getRole());
		});
	})

	
});