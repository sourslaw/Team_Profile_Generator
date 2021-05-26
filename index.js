const inquirer = require('inquirer');

const fs = require('fs');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const front = require('./src/htmlBegin.js');
const butt = require('./src/htmlEnd.js');

// array stores the user's inputs
// const team = [
// ];
const teamHtml = [
];


// function utilizes inquirer to get user inputs and pushes to team array
function runInq() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'name',
            message: "enter the unit manager's name: ",
		},
		{
            type: 'input',
            name: 'photo',
            message: "please link to the manager's photo: ",
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
			validate: function(email) {
				valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
				if (valid) {
					return true;
				} else {
					console.log(". . . enter a valid email")
					return false;
				}; //https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
			}
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "enter the unit manager's office number: ",
        }
	])
    .then((inputs) => {

		const manager = new Manager( inputs.name, inputs.photo, inputs.id, inputs.email, inputs.officeNumber )
		// team.push(manager)

		teamHtml.push(
			`
			<div class="card mb-5" style="width: 20rem;">
				<img src="${inputs.photo}" class="card-img-top rounded-circle circle-image"
					alt="...">
				<span id="circleMan"></span>
				<div class="card-body">
					<h5 class="card-title">${inputs.name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">manager</h6>
					<p>identification No. | ${inputs.id}</p>
					<p>phone No. | ${inputs.officeNumber}</p>
					<a href="mailto:${inputs.email}" class="card-link">${inputs.email}</a>
				</div>
			</div>
			`
		);
	
		whatDo();
		
	});
};

function runInq2() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'name',
            message: "enter the engineer's name: ",
		},
		{
            type: 'input',
            name: 'photo',
            message: "please link to the engineer's photo: ",
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
			validate: function(email) {
				valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
				if (valid) {
					return true;
				} else {
					console.log(". . . enter a valid email")
					email.clear()
					return false;
				};
			}
        },
        {
            type: 'input',
            name: 'github',
            message: "enter the engineer's github handle: ",
		}
	])
    .then((inputs) => {

		const engineer = new Engineer( inputs.name, inputs.photo, inputs.id, inputs.email, inputs.github)
		// team.push(engineer)

		teamHtml.push(
		`
		<div class="card mb-5" style="width: 20rem;">
				<img src="${inputs.photo}" class="card-img-top rounded-circle circle-image" alt="...">
				<span id="circleEng"></span>
				<div class="card-body">
					<h5 class="card-title">${inputs.name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">engineer</h6>
					<p>identification No.  |  ${inputs.id}</p>
					<p>github  |  <a href="https://github.com/${inputs.github}" class="card-link">${inputs.github}</a></p>
					<a href="mailto:${inputs.email}" class="card-link">${inputs.email}</a>
				</div>
			</div>
			`
		);
		
		whatDo();
		
	});
};

function runInq3() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'name',
            message: "enter the intern's name: ",
        },
		{
            type: 'input',
            name: 'photo',
            message: "please link to the intern's photo: ",
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
			validate: function(email) {
				valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
				if (valid) {
					return true;
				} else {
					console.log(". . . enter a valid email")
					return false;
				};
			}
        },
        {
            type: 'input',
            name: 'school',
            message: "enter the intern's school: ",
        }
	])
    .then((inputs) => {

		const intern = new Intern( inputs.name, inputs.photo, inputs.id, inputs.email, inputs.school )
		// team.push(intern)

		teamHtml.push(
		`	
		<div class="card mb-5" style="width: 20rem;">
				<img src="${inputs.photo}" class="card-img-top rounded-circle circle-image" alt="...">
				<span id="circleInt"></span>
				<div class="card-body">
					<h5 class="card-title">${inputs.name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">intern</h6>
					<p>identification No.  |  ${inputs.id}</p>
					<p>school  |  ${inputs.school}</p>
					<a href="mailto:${inputs.email}" class="card-link">${inputs.email}</a>
				</div>
			</div>
			`
		);
		
		whatDo();
		
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
			console.log('adding e n g i n e e r')
			runInq2(); 
		} 		
		if (inputs.action == 'intern') {
			console.log('adding i n t e r n')
			runInq3();
		} 
		if (inputs.action == 'exit') {
			console.log('your team is created, bye bye')

			teamHtml.push(butt);
			
			// fs.writeFile() creates the html based on teamHtml array
			fs.writeFile('./dist/generatedTEAM.html', teamHtml.join(""), (err) =>
				err ? console.log(err) : console.log('Success!')
			);
		};

	});
};

// intializes the script
runInq();
teamMaker();


// beginning block of html template
function teamMaker() {
	teamHtml.push(front);
};
