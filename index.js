const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


// creates structure for README based on user input
// const generate = (team) =>

// ;

// array stores the user's inputs
const team = [
];

// function gets the user's github handle
function gitHubText(team) {
	const data = team[0].github.split('/');
	const bit = data.slice(-1);
	return bit;
};

// function utilizes inquirer to get user inputs and pushes to team array
function runInq() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'managerName',
            message: "enter the unit manager's name: ",
        },
        {
            type: 'input',
            name: 'id',
            message: "enter the unit manager's ID number: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "enter the unit manager's email address: ",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "enter the unit manager's office number: ",
        }
	])
    .then((inputs) => {

		const manager = new Manager( inputs.managerName, inputs.id, inputs.email, inputs.officeNumber )
		team.push(manager)

		whatDo()
		
	});
};

function runInq2() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'engineerName',
            message: "enter the engineer's name: ",
        },
        {
            type: 'input',
            name: 'id',
            message: "enter the engineer's ID number: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "enter the engineer's email address: ",
        },
        {
            type: 'input',
            name: 'github',
            message: "enter the engineer's github: ",
        }
	])
    .then((inputs) => {

		const engineer = new Engineer( inputs.engineerName, inputs.id, inputs.email, inputs.github )
		team.push(engineer)
		
		whatDo()
		
	});
};

function runInq3() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'internName',
            message: "enter the intern's name: ",
        },
        {
            type: 'input',
            name: 'id',
            message: "enter the intern's ID number: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "enter the intern's email address: ",
        },
        {
            type: 'input',
            name: 'github',
            message: "enter the intern's school: ",
        }
	])
    .then((inputs) => {

		const intern = new Intern( inputs.internName, inputs.id, inputs.email, inputs.github )
		team.push(intern)
		
		whatDo()
		
	});
};

// function that prompts user to choose set of questions
function whatDo() {
	inquirer
    .prompt([
		{
            type: 'list',
            name: 'action',
            message: "select the employee type to create a profile for: ",
            choices: [ 'engineer', 'intern', 'exit']
        }
	])
    .then((inputs) => {

		if (inputs.action == 'engineer') {
			console.log('you made a engine')
			runInq2();
		} 
		
		if (inputs.action == 'intern') {
			console.log('you made a inter')
			runInq3();

		} 

		if (inputs.action == 'exit') {
			console.log('bye byee byye')
			console.log(team)
		} 		

	});
};


// function writes the generate() structure to a README file
// function writer(team) {
// 	const readmePage = generate(team);
// 	fs.writeFile('generatedREADME.md', readmePage, (err) =>
// 		err ? console.log(err) : console.log('Success!')
// 	);
// };


// intializes the script
runInq();
