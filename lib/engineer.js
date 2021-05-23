const Employee = require('./employee.js');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getGitHub() {
		return `${this.github}`;
	}

	getRole() {
		return 'engineer';
	}
}

// const john = new Engineer('tim', '12', 'johSUXorz@me.com', 'github.com/johnShit');
// console.log(john)
// console.log(john.getRole())
// console.log(john.getGitHub())

module.exports = Engineer;