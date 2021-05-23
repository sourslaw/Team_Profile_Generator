const Employee = require('../lib/employee.js');

describe('employee', () => {
	describe('getName', () => {
		it("should get the dude's name", () => {
			
			const tom = new Employee('tom', '09', 'fart@me.com');
			// tom.getName()

			expect('tom').toEqual(tom.getName());
		});
	})

	describe('getId', () => {
		it("should get the dude's id", () => {
			
			const tom = new Employee('tom', '09', 'fart@me.com');
			// tom.getName()

			expect('09').toEqual(tom.getId());
		});
	})

	describe('getEmail', () => {
		it("should get the dude's name", () => {
			
			const tom = new Employee('tom', '09', 'fart@me.com');
			// tom.getName()

			expect('fart@me.com').toEqual(tom.getEmail());
		});
	})

	describe('getRole', () => {
		it("should get the dude's name", () => {
			
			const tom = new Employee('tom', '09', 'fart@me.com');
			// tom.getName()

			expect('employee').toEqual(tom.getRole());
		});
	})

	
});