import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-grammar-misc',
	templateUrl: './grammar-misc.component.html',
	styleUrls: ['./grammar-misc.component.css']
})
export class GrammarMiscComponent implements OnInit {

	constructor() { }
	getBrackets = (string: string): string => `<b>[ </b> ${string} <b> ]</b>`;

	ngOnInit() { }

}
