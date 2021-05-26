// const manBit = 
// 	`
// 	<div class="card mb-5" style="width: 20rem;">
// 		<img src="./assets/pawel-czerwinski-aDIDvOG021w-unsplash.jpg" class="card-img-top rounded-circle circle-image"
// 			alt="...">
// 		<span id="circleMan"></span>
// 		<div class="card-body">
// 			<h5 class="card-title">${inputs.name}</h5>
// 			<h6 class="card-subtitle mb-2 text-muted">manager</h6>
// 			<p>identification No. | ${inputs.id}</p>
// 			<p>phone No. | ${inputs.officeNumber}</p>
// 			<a href="mailto:${inputs.email}" class="card-link">${inputs.email}</a>
// 		</div>
// 	</div>
// 	`
// ;

const front =
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
`;


modules.export = front;