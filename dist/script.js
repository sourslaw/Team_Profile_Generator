// const profilesEl = document.getElementById('profilesEl');
// const team = require('./index.js');


function profileCards(team) {

	const profilesEl = document.getElementById('profilesEl');
	
	for (i = 0; i < (team[0].list).length; i +=8) {

		const cardContainer = document.createElement('div');
		cardContainer.className = 'card mb-5';
		cardContainer.setAttribute('style', 'width: 20rem;');

		// image will go here
		
		const cardBody = document.createElement('div');
		cardBody.className = 'card-body';
		const hFiver = document.createElement('h5');
		hFiver.className = 'card-title';
		hFiver.innerText = `${team[i].name}`;

		// const locDate = (`${data[0].list[i].dt_txt}`);
		// hFiver.innerText = locDate.slice(0,10);

		// const hSix = document.createElement('img');
		// hSix.setAttribute('src', icons[`${data[1].weather[0].icon}`]);
		// const pOne = document.createElement('p');
		// pOne.innerText = 'TEM: ' + Math.round(`${data[0].list[i].main.temp}`) + 'F';
		// const pTwo = document.createElement('p');
		// pTwo.innerText = `Hm: ${data[0].list[0].main.humidity}` + '%';
		// cardBody.append(hFiver)
		// cardBody.append(hSix)
		// cardBody.append(pOne)
		cardBody.append(hFiver)
	
		cardContainer.append(cardBody)
	
		profilesEl.append(cardContainer);
	}
};

console.log('here are the cards');

module.exports = profileCards;