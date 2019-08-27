import { Component, OnInit } from '@angular/core';
import { soundSymbols, SoundSymbols, Lexicon, FirstWord } from './lexicon.model';
import { newLanguage, capitalize, NewLang } from '../lang-vars.model';

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
	engSort = false;
	langSort = true;
	newTable: Lexicon[];
	allTable: Lexicon[];
	symbols: string[] = [...new Set(
		soundSymbols.map(letter => letter.symbol)
	)];
	symbols1: string[];
	symbols2: string[];
	soundSymbols: SoundSymbols[] = soundSymbols;

	firstWord: { letter: string, word: Lexicon }[] = [];
	getAllWords: { letter: string, words: Lexicon[] }[] = [];

	capitals: string[] = this.symbols.map(symbol => capitalize(symbol));
	langCapitalize = (letter: string): string => (letter === 'ʯ') ? letter : `${capitalize(letter)} ${letter}`;
	sorter = (a: string, b: string): number => (a < b) ? -1 : (a > b) ? 1 : 0;

	tableStructure = (get: NewLang): Lexicon => ({
		spelling: capitalize(get.langWord),
		IPA: get.IPA,
		partOfSpeech: capitalize(get.partOfSpeech),
		engWord: capitalize(get.engWord),
		partOfSpeech2: get.partOfSpeech2 ? capitalize(get.partOfSpeech2) : '',
		engWord2: get.engWord2 ? capitalize(get.engWord2) : ''
	})

	changeLang(lang: string): void {
		switch (lang) {
			case 'English':
				this.newTable.sort((a, b) => this.sorter(a.engWord, b.engWord));
				break;
			case 'Lang':
				this.newTable.sort((a, b) => this.sorter(a.spelling, b.spelling));
				break;
		}
	}

	wordSort(lang: Lexicon[], symbols: string[]) {
		let wordGet: Lexicon[] = [];
		let wordLetter: string;
		let langSpelling0: string;
		for (let i = 0; i < symbols.length; i++) {
			wordLetter = capitalize(symbols[i]);
			wordGet = [];
			for (let j = 0; j < lang.length; j++) {
				langSpelling0 = lang[j].spelling.charAt(0);
				if (wordLetter === langSpelling0) {
					wordGet.push(lang[j]);
				}
			}
			this.getAllWords.push({ letter: symbols[i], words: wordGet });
			this.firstWord.push({ letter: symbols[i], word: wordGet[0] });
		}
	}

	getSymbol() {
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

	ngOnInit(): void {
		this.allTable = newLanguage
			.map(this.tableStructure)
			.sort((a, b) => this.sorter(a.spelling, b.spelling));

		this.newTable = this.allTable;
		this.getSymbol();
		/* ---------------------------------------------------------------------------------------------------------------- */

		this.symbols = this.symbols.sort(this.sorter);

		this.wordSort(this.allTable, this.symbols);

		this.symbols1 = this.symbols.slice(0, 16);
		this.symbols2 = this.symbols.slice(16);
	}
}
