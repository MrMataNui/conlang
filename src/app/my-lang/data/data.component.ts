import { Component, OnInit } from '@angular/core';
import { Lexicon, Symbols } from './data.model';
import { newLanguage, capitalize, NewLang } from '../lang-vars.model';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

	constructor() { }
	newSymbols: Symbols[];
	letterSort() {
		const newLanguageTable: string[] = newLanguage.map(get => get.langWord);
		const symbols: Symbols[] = [
			{ symbol: 'p', count: 0 },
			{ symbol: 'b', count: 0 },
			{ symbol: 't', count: 0 },
			{ symbol: 'ʈ', count: 0 },
			{ symbol: 'ɖ', count: 0 },
			{ symbol: 'k', count: 0 },
			{ symbol: 'ᵹ', count: 0 },
			{ symbol: 'ʯ', count: 0 },
			{ symbol: 'm', count: 0 },
			{ symbol: 'n', count: 0 },
			{ symbol: 'ꞥ', count: 0 },
			{ symbol: 'ñ', count: 0 },
			{ symbol: 'ꞇ', count: 0 },
			{ symbol: 'ȼ', count: 0 },
			{ symbol: 'ç', count: 0 },
			{ symbol: 'ỻ', count: 0 },
			{ symbol: 'ꭓ', count: 0 },
			{ symbol: 'ꝩ', count: 0 },
			{ symbol: 'ꝡ', count: 0 },
			{ symbol: 'ȝ', count: 0 },
			{ symbol: 'ꝛ', count: 0 },
			{ symbol: 'a', count: 0 },
			{ symbol: 'ä', count: 0 },
			{ symbol: 'e', count: 0 },
			{ symbol: 'ë', count: 0 },
			{ symbol: 'i', count: 0 },
			{ symbol: 'ï', count: 0 },
			{ symbol: 'o', count: 0 },
			{ symbol: 'ö', count: 0 },
			{ symbol: 'u', count: 0 },
			{ symbol: 'ü', count: 0 },
		];
		newLanguageTable.forEach(word => {
			symbols.forEach(symbol => {
				for (const letter of word) {
					if (letter === symbol.symbol) { symbol.count++; }
				}
			});
		});
		symbols.forEach(symbol => {
			if (symbol.symbol !== 'ʯ') {
				symbol.symbol = capitalize(symbol.symbol) + ' ' + symbol.symbol;
			}
		});

		const Sorter = (a: number, b: number): number => (a < b) ? -1 : (a > b) ? 1 : 0;
		this.newSymbols = symbols.sort((a, b) => Sorter(b.count, a.count));
	}
	ngOnInit(): void {
		this.letterSort();
	}

}
