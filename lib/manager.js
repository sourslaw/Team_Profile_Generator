const Employee = require('./employee.js');

class Manager extends Employee {
	constructor(name, photo, id, email, officeNumber) {
		super(name, photo, id, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return 'manager';
	}
}


module.exports = Manager;