const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

import { Given, Then } from 'cucumber';
import { $, browser } from 'protractor';
Given('you navigate to the translate page', () => { browser.get('/translate'); });

Then('it should translate the default scentence', () => {
	$('#translate-button').click();

	expect($('#wordOrder').$('i').getText())
		.to.eventually.equal('Start typing to see translation of words');

	expect($('#translation').$('b').getText())
		.to.eventually.equal('Ʊỻ eñiȝ ʈo ȝö uɥoỻe ƙuʈü ɥüꝡ');

	expect($('#ipa').$('p').getText())
		.to.eventually.equal('/ɯx eɳij ʈo joː uʍoˈxe cuˈʈuː huːhʷi/');
});

Then('it should translate a new scentence', () => {
	$('#eng-phrase').clear();

	$('#eng-phrase').sendKeys('I want a car');

	$('#translate-button').click();

	expect($('#wordOrder').$('i').getText())
		.to.eventually.equal('I want car');

	expect($('#translation').$('b').getText())
		.to.eventually.equal('Ꝡʯï ƙub ɥodo');

	expect($('#ipa').$('p').getText())
		.to.eventually.equal('/hʷiʔiː cub hʷoˈɖo/');
});
