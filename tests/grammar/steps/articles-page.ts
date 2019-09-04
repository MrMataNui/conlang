const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import grammarSelect from './grammar-dropdown';
import { ElementFinder, $ } from 'protractor';

Given('you navigate to the articles page', () => { grammarSelect('/articles'); });

Then('it should show definite articles', () => {
	const definiteArticleTable: ElementFinder = $('#def-art').$('table');

	definiteArticleTable
		.$$('tr').then(rows => {
			expect(rows.length).toBe(5);
		});

	definiteArticleTable
		.$$('tr').get(0)
		.$$('th').then(columns => {
			expect(columns.length).toBe(3);
		});

	definiteArticleTable
		.$$('tr').get(1)
		.$$('td').then(columns => {
			expect(columns.length).toBe(5);
		});

	definiteArticleTable
		.$$('tr').get(1)
		.$$('td').get(2)
		.getText().then(cell => {
			expect(cell).to.include('ȼo');
			expect(cell).to.include('/ʤo/');
		});
});
