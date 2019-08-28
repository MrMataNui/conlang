const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-truthy'));
const expect = chai.expect;

import { $, browser } from 'protractor';

export default function (grammarLoc: string): void {
	browser.actions()
		.mouseMove($('.dropdown'))
		.perform();
	expect($('.dropbtn').isDisplayed())
		.to.eventually.be.truthy();
	$(`a[href="${grammarLoc}"]`).click();
}
