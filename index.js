const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

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

		const manager = new Manager( inputs.name, inputs.id, inputs.email, inputs.officeNumber )
		// team.push(manager)

		teamHtml.push(
		`
		<div class="card mb-5" style="width: 20rem;">
				<img src="./assets/pawel-czerwinski-aDIDvOG021w-unsplash.jpg" class="card-img-top rounded-circle circle-image" alt="...">
				<span id="circleMan"></span>
				<div class="card-body">
					<h5 class="card-title">${inputs.name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">manager</h6>
					<p>identification No.  |  ${inputs.id}</p>
					<p>phone No.  |  ${inputs.officeNumber}</p>
					<a href="to:${inputs.email}" class="card-link">${inputs.email}</a>
				</div>
			</div>
		`
		);

		whatDo()
		
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

		const engineer = new Engineer( inputs.name, inputs.id, inputs.email, inputs.github )
		// team.push(engineer)

		teamHtml.push(
		`
		<div class="card mb-5" style="width: 20rem;">
				<img src="./assets/pawel-czerwinski-aDIDvOG021w-unsplash.jpg" class="card-img-top rounded-circle circle-image" alt="...">
				<span id="circleEng"></span>
				<div class="card-body">
					<h5 class="card-title">${inputs.name}</h5>
					<h6 class="card-subtitle mb-2 text-muted">engineer</h6>
					<p>identification No.  |  ${inputs.id}</p>
					<p>github  |  <a href="${inputs.github}" class="card-link">${inputs.github}</a></p>
					<a href="mailto:${inputs.email}" class="card-link">${inputs.email}</a>
				</div>
			</div>
			`
		);
		
		whatDo()
		
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
            name: 'school',
            message: "enter the intern's school: ",
        }
	])
    .then((inputs) => {

		const intern = new Intern( inputs.name, inputs.id, inputs.email, inputs.school )
		// team.push(intern)

		teamHtml.push(
		`	
		<div class="card mb-5" style="width: 20rem;">
				<img src="./assets/pawel-czerwinski-aDIDvOG021w-unsplash.jpg" class="card-img-top rounded-circle circle-image" alt="...">
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
			console.log('adding e n g i n e e r')
			runInq2(); 
		} 
		
		if (inputs.action == 'intern') {
			console.log('adding i n t e r n')
			runInq3();
		} 

		if (inputs.action == 'exit') {
			console.log('your team is created, bye bye')

			teamHtml.push(
			`</div>
					<div class="row justify-content-center mt-5" id="footer">
						<div class="col-sm-12 col-lg-8">
							<h1 class="text-center" id="footerText">&copy;2021 Our Co.</h1>
						</div>
					</div>
				</div>
			</body>
			</html>
			`
			);
			
			// fs.writerFile() writes the html file
			fs.writeFile('generatedTEAM.html', teamHtml.join(""), (err) =>
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
	teamHtml.push(
	`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
			integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,100&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="./dist/style.css" />
		<title>Team Profile</title>
	</head>
	<body>
		<div class="container">
			<div class="row justify-content-center mt-5 mb-5" id="box1">
				<div class="col-sm-12 col-lg-8">
					<h1 class="text-center" id="banner">Our Co. Team</h1>
				</div>
			</div>
			<div class="row justify-content-evenly pb-5" id=profilesEl>
	`
	)
};
