const Employee = require('./employee.js');

class Intern extends Employee {
	constructor(name, photo, id, email, school) {
		super(name, photo, id, email);
		this.school = school;
	}

	getSchool() {
		return `${this.school}`;
	}

	getRole() {
		return 'intern';
	}
}


module.exports = Intern;