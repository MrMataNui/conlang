const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-truthy'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import goTo from './grammar-dropdown';
import { ElementFinder, $ } from 'protractor';

Given('you navigate to the morphology page', () => { goTo('/morphology'); });

Then('it should show noun morphology', () => {
	const nounMorphologyTable: ElementFinder = $('#noun-morph').$('table');

	nounMorphologyTable
		.$$('tr').then(rows => {
			expect(rows).to.have.lengthOf(5);
		});

	nounMorphologyTable
		.$$('tr').get(0)
		.$$('th').then(columns => {
			expect(columns)
				.to.have.lengthOf(3);
		});

	nounMorphologyTable
		.$$('tr').get(1)
		.$$('td').then(columns => {
			expect(columns)
				.to.have.lengthOf(5);
		});

	nounMorphologyTable
		.$$('tr').get(1)
		.$$('td').get(2)
		.getText().then(cell => {
			expect(cell).to.include('pü');
			expect(cell).to.include('/puː/');
		});
});

Then('it should derivational morphology', () => {
	const derivationalMorphologyTable: ElementFinder = $('#lang-der-morph').$('table');

	derivationalMorphologyTable
		.$$('tr').then(rows => {
			expect(rows)
				.to.have.lengthOf(11);
		});

	derivationalMorphologyTable
		.$$('tr').get(0)
		.$$('th').then(columns => {
			expect(columns)
				.to.have.lengthOf(1);
		});

	derivationalMorphologyTable
		.$$('tr').get(1)
		.$$('td').then(columns => {
			expect(columns)
				.to.have.lengthOf(2);
		});

	derivationalMorphologyTable
		.$$('tr').get(1)
		.$$('td').get(1)
		.getText().then(cell => {
			expect(cell).to.include('-(i)ȼü');
			expect(cell).to.include('/iʤuː/');
		});
});
