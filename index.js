const inquirer = require('inquirer');
const fs = require('fs');

// creates structure for README based on user input
const generate = (box) =>

;

// array stores the user's inputs
const box = [
];


// function gets the user's github handle
function gitHubText(box) {
	const data = box[0].github.split('/');
	const bit = data.slice(-1);
	return bit;
};

// function utilizes inquirer to get user inputs and pushes to box array
function runInq() {
	inquirer
    .prompt([
		{
            type: 'input',
            name: 'userName',
            message: 'What is your name? ',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the Title of this README:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the Description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install this:',
        }
	])
    .then((inputs) => {
		box.push(inputs)
		writer(box)
	});
};

// function writes the generate() structure to a README file
function writer(box) {
	const readmePage = generate(box);
	fs.writeFile('generatedREADME.md', readmePage, (err) =>
		err ? console.log(err) : console.log('Success!')
	);
};


// intializes the script
runInq();