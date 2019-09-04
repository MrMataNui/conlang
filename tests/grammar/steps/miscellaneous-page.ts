const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-truthy'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import goTo from './grammar-dropdown';
import { $ } from 'protractor';

Given('you navigate to the grammar-misc page', () => { goTo('/grammar-misc'); });

Then('it should show perfect and progressive aspects', () => {
	$('#lang-perf')
		.$$('h3').getText()
		.then(titles => {
			expect(titles[0]).toBe('Perfect aspect');
			expect(titles[1]).toBe('Progressive aspect');
		});

	$('#lang-perf')
		.$$('p').getText()
		.then(descriptions => {
			expect(descriptions[0]).toBe('‘have studied’ No perfect aspect.');
			expect(descriptions[1]).toBe('‘am studying’ Uses the word ‘now’ before main verb.');
		});
});

Then('it should derivational show imperative', () => {
	$('#lang-imp')
		.$$('p').getText()
		.then(descriptions => {
			expect(descriptions[0]).toBe('‘study!’ (as a command)');
			expect(descriptions[1]).toBe('Suffix: [ -e /-e/ ]');
		});
});

Then('it should derivational show negation', () => {
	$('#lang-neg')
		.$$('p').getText()
		.then(descriptions => {
			expect(descriptions[0]).toBe('Suffix on verb: [ -(u)ȝ /-(u)j/ ]');
			expect(descriptions[1]).toBe('Tense affixes come between the root verb and the negative affix.');
		});
});
