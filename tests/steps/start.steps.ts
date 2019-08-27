const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { browser, $ } from 'protractor';
Given('you navigate to the home page', () => browser.get('/'));

Then('it should start the app', () => {
	expect($('.head-langname').getText())
		.to.eventually.equal('The Language of Johi');

	$('.center')
		.$$('p').getText()
		.then(para => {
			expect(para[0]).to.equal('Natively known as: Ȼoʯi');
			expect(para[1]).to.equal('/ʤoˈʔi/');
		});

	$('#lang-sentence')
		.$$('p').getText()
		.then(para => {
			expect(para[0])
				.to.eventually.include('and he stood');
			expect(para[1]
			).to.eventually.include('ƙä ɥep ɥaƙ');
		});

	expect($('#lang-sentence').$('.IPA').getText())
		.to.eventually.include('caː hʷep hʷac');

	expect($('#lang-sentence').$('.word-order').getText())
		.to.eventually.include('and he his');
});
