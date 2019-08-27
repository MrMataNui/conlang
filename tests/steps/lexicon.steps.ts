const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { browser, $ } from 'protractor';
Given('you navigate to the lexicon page', () => browser.get('/lexicon'));

Then('it should display the lexicon table', () => {
	/** Checks the row count */
	$('#lexicon-table')
		.$$('tr').then(allRows => {
			expect(allRows.length)
				.to.eventually.equal(3818);
		});

	/** Checks the column count */
	$('#lexicon-table')
		.$$('tr').get(0)
		.$$('th').then(allColumns => {
			expect(allColumns.length)
				.to.eventually.equal(6);
		});
});

Then('it should sort lexicon by Johi words', () => {
	/** Clicks the  'Sort By Johian Words' button */
	$('#JohianSort').click();

	/** Checks the first Johian word */
	$('#lexicon-table')
		.$$('tr').get(1)
		.$$('td').then(firstWord => {
			expect(firstWord[0].getText())
				.to.equal('A');
		});
});

Then('it should sort lexicon by English words', () => {
	/** Clicks the  'Sort By English Words' button */
	$('#EnglishSort').click();

	/** Checks the first English word */
	$('#lexicon-table')
		.$$('tr').get(1)
		.$$('td').then(firstWord => {
			expect(firstWord[3].getText())
				.to.equal('Abandon');
		});
});

Then('it should sort lexicon by a single Johi letter', () => {
	/** Clicks the  'Sort By Johian Words' 	button */
	$('#JohianSort').click();

	/** Has the doctionary sort by  'B' */
	$('#johi-letter')
		.$$('tr').get(1)
		.$$('td').get(1)
		.click();

	/** Checks the first Johian word */
	$('#lexicon-table')
		.$$('tr').get(1)
		.$$('td').then(firstWord => {
			expect(firstWord[0].getText())
				.to.equal('Ba');
		});

	/** Has the doctionary sort by all letters */
	$('#johi-letter')
		.$$('tr').get(0)
		.$$('th').get(0)
		.click();

	/** Checks the first Johian word */
	$('#lexicon-table')
		.$$('tr').get(1)
		.$$('td').then(firstWord => {
			expect(firstWord[0].getText())
				.to.equal('A');
		});
});
