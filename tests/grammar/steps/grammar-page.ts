const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-truthy'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import goTo from './grammar-dropdown';
import { ElementFinder, $ } from 'protractor';

Given('you navigate to the grammar page', () => { goTo('/grammar'); });

Then('it should show the word order', () => {
	$('#main-word-order').$('span')
		.getText().then(mainWordOrder => {
			expect(mainWordOrder)
				.to.equal('[ Subject-Oblique-Object-Verb ]');
		});

	$('#word-order-example')
		.$$('span').then(examples => {
			expect(examples[0].getText())
				.to.include('(Mary) Sub (opened) Verb');
			expect(examples[1].getText())
				.to.include('(Mary) Sub (with a key) Obl');
		});

	$('#adjective-order')
		.$('span').getText()
		.then(text => {
			expect(text)
				.to.equal('[ Adjectives are positioned before the noun ]');
		});

	$('#adposition')
		.$('span').getText()
		.then(text => {
			expect(text).to.equal('[ Postpositions ]');
		});
});

Then('it should show personal pronouns', () => {
	const personalPronounTable: ElementFinder = $('#pers-pronouns').$('table');

	personalPronounTable
		.$$('tr').then(rows => {
			expect(rows).to.have.lengthOf(7);
		});

	personalPronounTable
		.$$('tr').get(0)
		.$$('th').then(columns => {
			expect(columns).to.have.lengthOf(5);
		});

	personalPronounTable
		.$$('tr').$$('th').then(headers => {
			expect(headers).to.have.lengthOf(13);
		});

	personalPronounTable
		.$$('tr')
		.$$('td').get(0)
		.getText().then(cell => {
			expect(cell).to.include('I');
			expect(cell).to.include('i /i/');
		});
});

Then('it should show Verbs', () => {
	const verbTable: ElementFinder = $('#lang-verbs').$('table');

	verbTable
		.$$('tr').then(rows => {
			expect(rows).to.have.lengthOf(9);
		});

	verbTable
		.$$('tr').get(1)
		.$$('td').then(columns => {
			expect(columns).to.have.lengthOf(4);
		});

	verbTable
		.$$('tr').get(2)
		.$$('td').then(columns => {
			expect(columns).to.have.lengthOf(5);
		});

	verbTable
		.$$('tr').get(3)
		.$$('td').get(1)
		.getText().then(cell => {
			expect(cell).to.include('-(i)b');
			expect(cell).to.include('ȼiꞇib');
		});
});
