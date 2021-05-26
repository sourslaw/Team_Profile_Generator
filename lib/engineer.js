const Employee = require('./employee.js');

class Engineer extends Employee {
	constructor(name, photo, id, email, github) {
		super(name, photo, id, email);
		this.github = github;
	}

	getGitHub() {
		return `${this.github}`;
	}

	getRole() {
		return 'engineer';
	}
}


module.exports = Engineer;