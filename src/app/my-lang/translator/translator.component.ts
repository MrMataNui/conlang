import { Component, Input, OnInit } from '@angular/core';
import {
	NewLang,
	newLanguage,
	capitalize,
	getIPA,
	// nameSort,
	// allNames,
	langNames,
	erWordsDefaults,
	istWordsDefaults,
	ionWordsDefaults,
	ingWordsDefaults,
} from '../lang-vars.model';
import {
	personCheck,
	plurCheck,
	GetAffix,
	AllWords,
	ingCheck,
	ionCheck,
	blankSpace,
	getTrim,
	addBlank,
	Translation,
} from './translator.model';

interface BoolCheck {
	ing: boolean;
	ion: boolean;
	plur: boolean;
	person: boolean;
}
@Component({
	selector: 'app-translator',
	templateUrl: './translator.component.html',
	styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
	constructor() { }
	showTranslator = true;
	@Input() engLang = 'Start typing to see the translation of the words';
	translation: Translation;

	testDisplay = (testVar: boolean | string, display: string): { display: string } => ({
		display: (testVar) ? display : 'none'
	})

	addMorph(newVar: string, newVar2: string, wordLoc: number): string {
		const varArray = newVar.split(' ');
		varArray.splice(wordLoc, 0, newVar2);
		newVar = varArray.join(' ');
		return newVar;
	}

	getBlanks(allWords, obj): AllWords {
		allWords.getPartOfSpeech += addBlank(obj.partOfSpeech);
		allWords.wordOrder += addBlank(obj.engWord);
		allWords.langText += addBlank(obj.langWord);
		allWords.langIPA += addBlank(obj.IPA);
		return allWords;
	}

	getRegex(userWord, engWord) {
		const regex = new RegExp(userWord + ' ');
		const regex2 = /[\(\)]/.test(engWord);
		if (regex.test(engWord)) {
			console.log('regex', regex);
			console.log('regex2', `"${regex2}"`);
			console.log('engWord', `"${engWord}"`);
		}
	}

	wordStyle(
		wordType: string,
		boolCheck: BoolCheck,
		userWord: string,
		wordType2?: string
	): boolean {
		const defaults = {
			er: erWordsDefaults,
			ist: istWordsDefaults,
			ing: ingWordsDefaults,
			ion: ionWordsDefaults,
		};
		const type = (wordType2) ? wordType2 : wordType;
		const check1 = boolCheck[type];
		const check2 = !defaults[type]
			.includes(userWord);
		const check3 = new RegExp(type);
		const newCheck3 = check3.test(userWord);
		return (check1 && check2 && newCheck3);
	}

	wordStyle2(getPlurCheck: boolean, engWord: string, userWord: string): boolean {
		if (engWord) {
			if (/\(/.test(engWord)) { engWord = engWord.replace(/\(/, '\\('); }
			if (/\)/.test(engWord)) { engWord = engWord.replace(/\)/, '\\)'); }
			const wordCheck = new RegExp(`^${engWord}e?s$`).test(userWord);
			return (getPlurCheck && wordCheck);
		}
	}

	translate(text: string): Translation {
		text = text.toLowerCase();
		const userText: string[] = text.split(blankSpace);
		userText.forEach((userWord, i) => {
			userText[i] = (userWord !== 'i')
				? userText[i] : 'I';
		});
		const wordDefaults: AllWords = {
			langText: '',
			langIPA: '',
			wordOrder: '',
			getPartOfSpeech: '',
		};
		const allWords: AllWords = wordDefaults;
		let newWords: AllWords = wordDefaults;
		const newWordMorph: { getWord: GetAffix, wordLoc: number }[] = [];
		let index = 0;
		userText.forEach(userWord => {
			let prevWord: string;
			const boolCheck: BoolCheck = { ing: true, ion: true, plur: true, person: true };
			newLanguage.forEach(newLangWord => {
				const { engWord, engWord2 } = newLangWord;
				const engWordCheck = (engWord !== prevWord);
				const engWordCheck2 = (engWord2 !== prevWord);
				if (engWordCheck || engWordCheck2) {
					// this.getRegex(userWord, engWord);
					switch (true) {
						case userWord === engWord2:
							newLangWord = { ...newLangWord, engWord: engWord2 };
						case userWord === engWord:
							newWords = this.getBlanks(allWords, newLangWord);
							prevWord = userWord;
							break;
						/*
						case userWord === 'a':
							newWords = this.getBlanks(allWords, {
								partOfSpeech: 'pronoun',
								engWord: 'a',
								langWord: 'ho',
								IPA: '/ho/',
							});
							prevWord = userWord;
							break;
						*/
						// case this.wordStyle2(boolCheck.plur, engWord, userWord):
						// case this.wordStyle2(boolCheck.plur, engWord2, userWord):
						case boolCheck.plur && userWord === engWord + 's':
						case boolCheck.plur && userWord === engWord + 'es':
						case boolCheck.plur && userWord === engWord2 + 's':
						case boolCheck.plur && userWord === engWord2 + 'es':
							newWordMorph.push({
								getWord: plurCheck(userWord),
								wordLoc: index
							});
							prevWord = userWord;
							boolCheck.plur = !boolCheck.plur;
							break;
						case this.wordStyle('ing', boolCheck, userWord):
							newWordMorph.push({
								getWord: ingCheck(userWord),
								wordLoc: index
							});
							boolCheck.ing = !boolCheck.ing;
							break;
						case this.wordStyle('ion', boolCheck, userWord):
							newWordMorph.push({
								getWord: ionCheck(userWord),
								wordLoc: index
							});
							boolCheck.ion = !boolCheck.ion;
							break;
						case this.wordStyle('person', boolCheck, userWord, 'ist'):
						case this.wordStyle('person', boolCheck, userWord, 'er'):
							newWordMorph.push({
								getWord: personCheck(userWord),
								wordLoc: index
							});
							prevWord = userWord;
							boolCheck.person = !boolCheck.person;
							break;
					}
				}
			});
			const notGet = ['the', 'are', 'is', 'were', 'was'];
			let getBool = true;
			if (notGet.includes(userWord)) {
				getBool = false;
			}
			if (getBool) { index++; }
		});
		newWords.langIPA = newWords.langIPA.replace(/\//g, '');
		const trim: AllWords = getTrim(newWords);
		newWordMorph.forEach(word => {
			// watering
			const { wordLoc, getWord } = word;

			getWord.lang.IPA = getWord.lang.IPA.replace(/\//g, '');
			trim.langIPA = this.addMorph(trim.langIPA, getWord.lang.IPA, wordLoc);
			trim.langText = this.addMorph(trim.langText, getWord.lang.word, wordLoc);
			trim.wordOrder = this.addMorph(trim.wordOrder, getWord.engWord, wordLoc);

		});
		return {
			display: this.testDisplay(this.engLang, 'block'),
			english: capitalize(trim.wordOrder),
			langWord: capitalize(trim.langText),
			IPA: getIPA(trim.langIPA),
		};
	}

	ngOnInit() { }
}
