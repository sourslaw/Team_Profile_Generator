class Employee {
	constructor(name, photo, id, email) {
		this.name = name;
		this.photo = photo;
		this.id = id;
		this.email = email;
	}

	getName() {
		return `${this.name}`;
	}

	getId() {
		return `${this.id}`;
	}

	getEmail() {
		return `${this.email}`;
	}

	getRole() {
		return 'employee';
	}
}


module.exports = Employee;