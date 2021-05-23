const Engineer = require('../lib/engineer.js');

describe('engineer', () => {
	describe('getGithub', () => {
		it("should get the engineer's github", () => {
			const input = new Engineer('tim', '21', 'johSUXorz@me.com', 'github.com/johnnyNotApple');

			expect('github.com/johnnyNotApple').toEqual(input.getGitHub());
		});
	})

	describe('getRole', () => {
		it("should get the engineer's role", () => {
			const input = new Engineer('tim', '21', 'johSUXorz@me.com', 'github.com/johnnyNotApple');

			expect('engineer').toEqual(input.getRole());
		});
	})

});