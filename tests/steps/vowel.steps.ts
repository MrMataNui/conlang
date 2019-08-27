const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { $, browser } from 'protractor';
Given('you navigate to the vowels page', () => browser.get('/vowels'));

Then('it should load the inventory', () => {
	expect($('#vow-inv').$('span').getText())
		.to.eventually.equal('/a aː e eː i iː o oː u uː ɯ/');

	expect($('#dipthongs').$('span').getText())
		.to.eventually.equal('None');
});

Then('it should load the vowel table', () => {
	$('#vowelGraph')
		.$$('span.IPA').then(allItems => {
			const newItem1 = [];
			const newItem2 = [];
			allItems.forEach(eachItem => {
				newItem2.push(
					eachItem.getText().then(divText => {
						if (/\w/.test(divText)) {
							newItem1.push(divText);
						}
						return newItem1;
					})
				);
			});
			Promise.all(newItem2).then(() => {
				expect(newItem1.length).to.equal(5);
				expect(newItem1)
					.to.equal(['i iː', 'ɯ • u uː', 'e eː', 'o oː', 'a aː']);
			});
		});
});

Then('it should load the vowel symbols', () => {
	/** Gets the vowel symbols rows */
	$('#vowel-symbols')
		.$$('tr').then(allRows => {
			expect(allRows.length).to.equal(12);
		});

	/** Gets the vowel symbols columns */
	$('#vowel-symbols')
		.$$('tr').get(0)
		.$$('th').then(allColumns => {
			expect(allColumns.length).to.equal(2);
		});
});
