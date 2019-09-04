import { Component, OnInit } from '@angular/core';
import { Symbols } from './data.model';
import { letterSort } from '../lang-vars.model';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

	constructor() { }
	newSymbols: Symbols[];

	ngOnInit(): void {
		this.newSymbols = letterSort('data');
	}

}
