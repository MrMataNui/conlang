const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { $, browser } from 'protractor';
Given('you navigate to the syllables page', () => browser.get('/syllables'));

Then('it should load the syllable structure', () => {
	expect($('#syll-pattern').$('td').getText())
		.to.eventually.equal('(C)V(C)');

	expect($('#syll-stress').$('td').getText())
		.to.eventually.include('Second');

	expect($('#syll-wordStart').$('td').getText())
		.to.eventually.equal('b, d, c, g, hʷ, j, k, m, p, t, ʃ, ɖ, ɣ, ɲ, ɳ, ʂ, ʈ, ʍ');

	expect($('#syll-wordMid').$('td').getText())
		.to.eventually.equal('b, d, dj, c, g, j, jk, k, kp, m, mj, mp, ʃ, ɖ, ɣ, ɲ, ɳ, ɽ, ʂ, ʈ, ʔ');

	expect($('#syll-wordFinal').$('td').getText())
		.to.eventually.equal('b, d, c, g, j, m, p, t, ɖ, ɣ, ɳ, ʂ');
});

Then('it should load the \'phonological rules\' table', () => {
	$('#phonRules')
		.$$('tr').get(0)
		.$$('th').then(row => {
			expect(row.length).to.equal(3);
		});

	$('#phonRules')
		.$$('tr').get(1)
		.$$('td').then(phonRuleText => {
			expect(phonRuleText[0].getText())
				.to.equal('Guide to phonological rules: "e → i / _g" means ‘e’ turns into ‘i’ before a ‘g’.');

			expect(phonRuleText[2].getText())
				.to.equal('a → aː / _C#');
		});
});
