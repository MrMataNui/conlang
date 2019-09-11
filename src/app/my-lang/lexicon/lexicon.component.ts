import { Component, OnInit } from '@angular/core';
import { soundSymbols, getSymbols, SoundSymbols, Lexicon } from './lexicon.model';
import { Symbols } from '../data/data.model';
import { newLanguage, capitalize, NewLang, letterSort, setLocale } from '../lang-vars.model';

// import { NgModule } from '@angular/core';
// import { MainPipe } from './capitalize-pipe.module';
// import { AppComponent }	 from '../../app.component';

// @NgModule({ imports: [ MainPipe ], bootstrap: [ AppComponent ] })

@Component({
	selector: 'app-lexicon',
	templateUrl: './lexicon.component.html',
	styleUrls: ['./lexicon.component.css']
})

export class LexiconComponent implements OnInit {
	constructor() { }
	symbolColspan: number;
	engSort = false;
	langSort = true;
	newTable: Lexicon[];
	allTable: Lexicon[];
	symbols: string[] = soundSymbols.map(letter => letter.symbol);
	getSymbols: string[] = getSymbols.map(letter => letter.symbol);
	symbols1: string[];
	symbols2: string[];
	soundSymbols: SoundSymbols[] = soundSymbols;
	letterCheck: string;
	letterSort: Symbols[] = letterSort('lexicon');
	showLetter: string;
	newGetLetter: { letter: string; count: string; };
	halfSymbols: number;
	allCount = 0;

	getAllWords: { letter: string, words: Lexicon[] }[] = [];

	capitals: string[] = this.getSymbols.map(symbol => capitalize(symbol));
	langCapitalize = (letter: string): string => (letter === 'ʯ') ? letter : `${capitalize(letter)} ${letter}`;
	sorter = (a: string, b: string): number => (a < b) ? -1 : (a > b) ? 1 : 0;

	tableStructure = (get: NewLang): Lexicon => ({
		spelling: get.langWord,
		IPA: get.IPA,
		partOfSpeech: capitalize(get.partOfSpeech),
		engWord: capitalize(get.engWord),
		partOfSpeech2: get.partOfSpeech2 ? capitalize(get.partOfSpeech2) : '',
		engWord2: get.engWord2 ? capitalize(get.engWord2) : ''
	})

	changeLang(lang: string): void {
		let sorter: (a: Lexicon, b: Lexicon) => number;
		switch (lang) {
			case 'English':
				sorter = (a, b) => this.sorter(a.engWord, b.engWord);
				break;
			case 'Lang':
				sorter = (a, b) => this.sorter(a.spelling, b.spelling);
				break;
		}
		this.newTable.sort(sorter);
	}

	symbolSort(symbols: string[]): string[] {
		const myArray: string[] = symbols;
		const newArray: string[] = [];
		for (let i = 0; i < myArray.length; i++) {
			if (i === 0) {
				newArray.push(myArray[i]);
			} else {
				let sameValue = false;
				for (let j = 0; j < newArray.length; j++) {
					if (myArray[i] === newArray[j]) { sameValue = true; }
					if (sameValue === false) { newArray.push(myArray[i]); }
				}
			}
		}
		return newArray;
	}

	wordSort(lang: Lexicon[], symbols: string[]): void {
		// console.log('symbols', symbols);
		// const newSymbols = this.symbolSort(symbols);
		// console.log('newSymbols', newSymbols);

		let wordGet: Lexicon[] = [];
		let wordLetter: string;
		let langSpelling0: string;
		for (let i = 0; i < symbols.length; i++) {
			wordLetter = symbols[i];
			wordGet = [];
			for (let j = 0; j < lang.length; j++) {
				langSpelling0 = lang[j].spelling.charAt(0);
				if (wordLetter === langSpelling0) { wordGet.push(lang[j]); }
			}
			this.getAllWords.push({ letter: symbols[i], words: wordGet });
		}
	}

	getSymbol(): void {
		const newSoundSymbols = [];
		this.soundSymbols.forEach((letter, i) => {
			const newS0 = (i - 1 < 0)
				? { symbol: '', sound: '', }
				: soundSymbols[i - 1];
			const newS1 = soundSymbols[i];
			const newS2 = soundSymbols[i + 1];
			let letterCheck = { symbol: false, sound: false };
			if (newS2) {
				letterCheck = {
					sound: (newS1.symbol === newS2.symbol),
					symbol: (newS1.sound === newS2.sound),
				};
			}
			if (newS2) {
				if (letterCheck.sound || letterCheck.symbol) {
					newSoundSymbols.push({
						sound: (letterCheck.sound) ? `${newS1.sound} OR ${newS2.sound}` : newS1.sound,
						symbol: (letterCheck.symbol) ? `${newS1.symbol} OR ${newS2.symbol}` : newS1.symbol,
					});
				} else if ((newS1.symbol !== newS0.symbol) && (newS1.sound !== newS0.sound)) {
					newSoundSymbols.push(newS1);
				}
			} else {
				newSoundSymbols.push(newS1);
			}
		});
		this.soundSymbols = this.soundSymbols.sort((a, b) => this.sorter(a.symbol, b.symbol));
	}

	allClick(): void {
		this.newTable = this.allTable;
		this.letterCheck = 'All Letters';

		this.newGetLetter = this.getLetter();
	}

	letterClick({ words, letter }): void {
		this.newTable = words;
		this.letterCheck = letter;

		this.newGetLetter = this.getLetter();
	}

	getLetter(): { letter: string, count: string } {
		let finalLetter: { letter: string, count: string };
		const getTheLetter = (getLetter: string, getCount: number) => ({
			letter: getLetter,
			count: `Count: ${setLocale(getCount, 'English')}`
		});

		if (this.letterCheck === 'All Letters') {
			finalLetter = getTheLetter(this.letterCheck, this.allCount);
		} else {
			this.letterSort.forEach(letter => {
				if (this.letterCheck === letter.symbol) {
					finalLetter = getTheLetter(this.letterCheck, letter.count);
				}
			});
		}
		return finalLetter;
	}

	ngOnInit(): void {
		this.letterSort.forEach(letter => { this.allCount += letter.count; });

		this.allTable = newLanguage
			.map(this.tableStructure)
			.sort((a, b) => this.sorter(a.spelling, b.spelling));

		this.getSymbol();
		/* ---------------------------------------------------------------------------------------------------------------- */

		this.getSymbols = this.getSymbols.sort(this.sorter);

		this.wordSort(this.allTable, this.getSymbols);

		this.halfSymbols = this.getSymbols.length / 2;
		this.symbolColspan = (this.getSymbols.length % 2)
			? Math.ceil(this.halfSymbols)
			: this.halfSymbols;

		this.symbols1 = this.getSymbols.slice(0, this.symbolColspan);
		this.symbols2 = this.getSymbols.slice(this.symbolColspan);
		if (this.getSymbols.length % 2) {
			this.symbols2.push(' ');
			this.getAllWords.push({ letter: ' ', words: [] });
		}

		this.letterClick(this.getAllWords[0]);
	}
}
