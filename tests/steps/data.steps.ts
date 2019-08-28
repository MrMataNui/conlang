const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { $, browser } from 'protractor';
Given('you navigate to the data page', () => { browser.get('/data'); });

Then('should load the data table', () => {
	$('#letter-occourances')
		.$$('tr').then(row => {
			expect(row.length)
				.to.eventually.equal(32);
		});

	$('#letter-occourances')
		.$$('tr').get(0)
		.$$('th').then(column => {
			expect(column.length)
				.to.eventually.equal(2);
		});
});
