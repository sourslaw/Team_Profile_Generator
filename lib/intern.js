const Employee = require('./employee.js');


class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getSchool() {
		return `${this.school}`;
	}

	getRole() {
		return 'intern';
	}
}

// const sally = new Intern('sally', '19', 'sallyU@me.com', 'U of Fart');
// console.log(sally)
// console.log(sally.getRole())
// console.log(sally.getSchool())

module.exports = Intern;
