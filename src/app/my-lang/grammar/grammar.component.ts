import { Component, OnInit } from '@angular/core';
import {
	PartOfSpeech,
	Get,
	Tenses,
	AllTenses,
	Pronouns,
	Article,
	Example,
	Words
} from './grammar.model';

@Component({
	selector: 'app-grammar',
	templateUrl: './grammar.component.html',
	styleUrls: ['./grammar.component.css']
})

export class GrammarComponent implements OnInit {
	constructor() { }
	langName = ['English', 'NewLang'];
	pronounsEng: Pronouns = {
		first: {
			singular: {
				Nominative: 'I',
				Accusative: 'me',
				Genitive: 'mine',
				Dative: 'to me',
			},
			plural: {
				Nominative: 'we',
				Accusative: 'us',
				Genitive: 'ours',
				Dative: 'to us',
			},
		},
		second: {
			singular: {
				Nominative: 'you',
				Accusative: 'you',
				Genitive: 'yours',
				Dative: 'to you',
			},
			plural: {
				Nominative: 'you',
				Accusative: 'you',
				Genitive: 'yours',
				Dative: 'to you',
			},
		},
		third: {
			singular: {
				Nominative: 'he/she/it',
				Accusative: 'him/her/it',
				Genitive: 'his/hers/its',
				Dative: 'to him/her/it',
			},
			plural: {
				Nominative: 'they',
				Accusative: 'them',
				Genitive: 'theirs',
				Dative: 'to them',
			},
		},
	};
	pronouns: Pronouns = {
		first: {
			singular: {
				Nominative: 'i /i/',
				Accusative: 'iɥ /iʍ/',
				Genitive: 'ik /ik/',
				Dative: 'iȝ /ij/',
			},
			plural: {
				Nominative: 'to /to/',
				Accusative: 'tiȝ /tij/',
				Genitive: 'te /te/',
				Dative: 'tu /tu/',
			},
		},
		second: {
			singular: {
				Nominative: 'ɥe /ʍe/',
				Accusative: 'ɥum /ʍum/',
				Genitive: 'ɥöp /ʍoːp/',
				Dative: 'ɥo /ʍo/',
			},
			plural: {
				Nominative: 'peꭓ /peɣ/',
				Accusative: 'peç /peʂ/',
				Genitive: 'peᵹ /peg/',
				Dative: 'pïb /piːb/',
			},
		},
		third: {
			singular: {
				Nominative: 'ɥep /hʷep/',
				Accusative: 'ɥiᵹ /hʷig/',
				Genitive: 'ɥaȼ /hʷaʤ/',
				Dative: 'ɥöȝ /hʷoːj/',
			},
			plural: {
				Nominative: 'kuȼ /kuʤ/',
				Accusative: 'kïȝ /kiːj/',
				Genitive: 'koȝ /koj/',
				Dative: 'kun /kun/',
			},
		},
	};
	tenses: Tenses = { past: '', present: '', future: '' };
	verbs: AllTenses = {
		first: {
			singular: {
				past: this.newTenseCheck(
					'Suffix',
					'-(i)b', '/-(i)b/',
					'ȼiꞇib', '/ʤiˈʧib/',
				),
				present: this.newTenseCheck(
					'Suffix',
					'-(e)ꞇi', '/eʧi/',
					'ȼiꞇiꞇi', '/ʤiˈʧiʧi/',
				),
				future: this.newTenseCheck(
					'Suffix',
					'-ë', '/-eː/',
					'ȼiꞇië', '/ʤiˈʧieː/',
				),
			},
			plural: {
				past: this.newTenseCheck(
					'Suffix',
					'-(o)ñ', '/-(o)ɲ/',
					'ȼiꞇiñ', '/ʤiˈʧiɲ/'
				),
				present: this.newTenseCheck(
					'Suffix',
					'-ï', '/-iː/',
					'ȼiꞇiï', '/ʤiˈʧiiː/'
				),
				future: this.newTenseCheck(
					'Suffix',
					'-(o)ꝺu', '/odu/',
					'ȼiꞇiꝺu', '/ʤiˈʧidu/'
				),
			},
		},
		second: {
			singular: {
				past: this.newTenseCheck(
					'Suffix',
					'-(u)ꝺ', '/-(u)d/',
					'ȼiꞇiꝺ', '/ʤiˈʧid/'
				),
				present: this.newTenseCheck(
					'Suffix',
					'-(i)ꝺi', '/idi/',
					'ȼiꞇiꝺi', '/ʤiˈʧidi/'
				),
				future: this.newTenseCheck(
					'Suffix',
					'-(o)ñ', '/-(o)ɲ/',
					'ȼiꞇiñ', '/ʤiˈʧiɲ/'
				),
			},
			plural: {
				past: this.newTenseCheck(
					'Suffix',
					'-(i)ȼ', '/-(i)ʤ/',
					'ȼiꞇiȼ', '/ʤiˈʧiʤ/'
				),
				present: this.newTenseCheck(
					'Suffix',
					'-(i)p', '/-(i)p/',
					'ȼiꞇip', '/ʤiˈʧip/'
				),
				future: this.newTenseCheck(
					'Suffix',
					'-(e)ɖ̥', '/-(e)ɖ̥/',
					'ȼiꞇiɖ̥', '/ʤiˈʧiɖ̥/'
				),
			},
		},
		third: {
			singular: {
				past: this.newTenseCheck(
					'Suffix',
					'-(i)n', '/-(i)n/',
					'ȼiꞇin', '/ʤiˈʧin/'
				),
				present: this.newTenseCheck(
					'Suffix',
					'-(u)çu', '/uʂu/',
					'ȼiꞇiçu', '/ʤiˈʧiʂu/'
				),
				future: this.newTenseCheck(
					'Suffix',
					'-(i)ȝ', '/-(i)j/',
					'ȼiꞇiȝ', '/ʤiˈʧij/'
				),
			},
			plural: {
				past: this.newTenseCheck(
					'Suffix',
					'-(ö)ᵹo', '/oːgo/',
					'ȼiꞇiᵹo', '/ʤiˈʧigo/'
				),
				present: this.newTenseCheck(
					'Suffix',
					'-(i)ȝ', '/-(i)j/',
					'ȼiꞇiȝ', '/ʤiˈʧij/'
				),
				future: this.newTenseCheck(
					'Suffix',
					'-(e)ꞥ', '/-(e)ɳ/',
					'ȼiꞇiꞥ', '/ʤiˈʧiɳ/'
				),
			},
		},
	};
	pronTypeNumber: string[] = ['singular', 'plural'];
	pronTypePerson: string[] = ['first', 'second', 'third'];
	pronDefNames: string[] = ['Nominative', 'Accusative', 'Genitive', 'Dative'];
	allTenses = [
		'first singular',
		'second singular',
		'third singular',
		'first plural',
		'second plural',
		'third plural',
	];
	newTenseCheck(
		affixName: string,
		affix: string,
		affixIPA: string,
		name: string,
		nameIPA: string
	): string {
		return `${affixName}:
		<p> <b>${affix}<br /> ${affixIPA} </b> </p>
		<p> <b>${name}<br /> ${nameIPA} </b> </p>`;
	}
	capitalize = (text: string): string => (text)
		? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
		: ''
	SubScr = (word: string, type: string): string => `(${word})<sub> <b>${type}</b> </sub> `;
	partOfSpeech = (): PartOfSpeech => ({
		Subject: this.SubScr('Mary', 'Sub'),
		Oblique: this.SubScr('with a key', 'Obl'),
		Object: this.SubScr('the door', 'Obj'),
		Verb: this.SubScr('opened', 'Verb'),
	})
	getBrackets = (string: string): string => `<b>[ </b> ${string} <b> ]</b>`;
	word = (): Words => ({
		order: this.getBrackets('Subject-Oblique-Object-Verb'),
		adOrder: this.getBrackets('Adjectives are positioned before the noun'),
		adposition: this.getBrackets('Postpositions'),
	})
	typeCheck = (type: string): string => (type) ? `<br /> ${type} ` : '';
	first = (type: string): string => '1<sup>st</sup>' + this.typeCheck(type);
	second = (type: string): string => '2<sup>nd</sup>' + this.typeCheck(type);
	third = (type: string): string => '3<sup>rd</sup>' + this.typeCheck(type);
	get = (type: string): Get => ({
		wordOrder: this.getWordOrder(type),
		tense: this.getTenses(type),
	})
	tenseCheck(tense: string): string {
		switch (tense) {
			case 'first': return this.first('');
			case 'first singular': return this.first('singular');
			case 'first plural': return this.first('plural');
			case 'second': return this.second('');
			case 'second singular': return this.second('singular');
			case 'second plural': return this.second('plural');
			case 'third': return this.third('');
			case 'third singular': return this.third('singular');
			case 'third plural': return this.third('plural');
		}
	}

	/**
	 * gets the word order for the specified language
	 * and displays the example sentance
	 * @param	{string} lang
	 *						the language to get the word order for
	 * @returns {string}
	 */
	getWordOrder(lang: string): string {
		const { Subject, Verb, Object, Oblique } = this.partOfSpeech();
		let wordOrder: string;
		switch (lang) {
			case 'English':
				wordOrder = Subject + Verb + Object + Oblique;
				break;
			case 'NewLang':
				wordOrder = Subject + Oblique + Object + Verb;
				break;
			default: return;
		}
		return this.getBrackets(wordOrder.trim());
	}

	/**
	 * checks the tense to determine which table header to display
	 * @param	{string} tenseCheck
	 *						the tense to be checked
	 * @param	{Tenses}
	 */
	getTenses(tenseCheck: string): Tenses {
		const tense: AllTenses = this.verbs;
		switch (tenseCheck) {
			case 'first singular': return tense.first.singular;
			case 'first plural': return tense.first.plural;
			case 'second singular': return tense.second.singular;
			case 'second plural': return tense.second.plural;
			case 'third singular': return tense.third.singular;
			case 'third plural': return tense.third.plural;
			default: return;
		}
	}
	ngOnInit() { }
}
