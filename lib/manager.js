const Employee = require('./employee.js');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return 'manager';
	}
}


// const timmy = new Manager('tim', '10', 'fartmacine@fart.com', '3435059344');
// console.log(timmy)
// console.log(timmy.getRole())



module.exports = Manager;