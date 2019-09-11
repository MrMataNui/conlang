const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { ElementFinder, $, browser } from 'protractor';

Given('you navigate to the consonants page', () => { browser.get('/consonants'); });

Then('it should load the consonant inventory', () => {
	const consonantInventory: ElementFinder = $('#cons-inv').$('span');
	expect(consonantInventory.getText())
		.to.eventually.equal('/m ɳ ɲ b ʈ ɖ g ʔ ʃ c ʂ x hʷ j ʧ ɽ/');
});

Then('it should load the consonant table', () => {
	/** Gets the consonant table rows */
	$('#constTable')
		.$$('tr').then(allRows => {
			expect(allRows.length)
				.to.eventually.equal(13);
		});

	/** Gets the consonant table columns */
	$('#constTable')
		.$$('tr').get(0)
		.$$('th').then(allColumns => {
			expect(allColumns.length)
				.to.eventually.equal(14);
		});
});

Then('it should load the consonant symbols', () => {
	/** Gets the consonant symbols rows */
	$('#const-symbols')
		.$$('tr').then(allRows => {
			expect(allRows.length)
				.to.eventually.equal(20);
		});

	/** Gets the consonant symbols columns */
	$('#const-symbols')
		.$$('tr').get(0)
		.$$('th').then(allColumns => {
			expect(allColumns.length)
				.to.eventually.equal(2);
		});
});
