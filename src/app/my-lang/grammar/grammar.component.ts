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

interface Affix { affix: string; affixIPA: string; }
interface Name { name: string; nameIPA: string; }

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
				Accusative: 'iꞍ /iʧ/',
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
				Nominative: 'Ɥe /ʧe/',
				Accusative: 'Ɥum /ʧum/',
				Genitive: 'Ɥöꞗ /ʧoːb/',
				Dative: 'Ɥo /ʧo/',
			},
			plural: {
				Nominative: 'ꞗeꭓ /beɣ/',
				Accusative: 'ꞗeç /beʂ/',
				Genitive: 'ꞗeᵹ /beg/',
				Dative: 'ꞗïꞗ /biːb/',
			},
		},
		third: {
			singular: {
				Nominative: 'Ƕeꞗ /hʷeb/',
				Accusative: 'Ƕiᵹ /hʷig/',
				Genitive: 'Ƕᴀꝭ /hʷaʃ/',
				Dative: 'Ƕöȝ /hʷoːj/',
			},
			plural: {
				Nominative: 'kuꝭ /kuʃ/',
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
					{ affix: '-(i)ꞗ', affixIPA: '/-(i)b/' },
					{ name: 'ꝭiꞍiꞗ', nameIPA: '/ʃiˈʧib/' }
				),
				present: this.newTenseCheck(
					'Suffix',
					{ affix: '-(e)Ɥi', affixIPA: '/-eʧi/' },
					{ name: 'ꝭiꞍiꞍi', nameIPA: '/ʃiˈʧiʧi/' }
				),
				future: this.newTenseCheck(
					'Suffix',
					{ affix: '-ë', affixIPA: '/-eː/' },
					{ name: 'ꝭiꞍië', nameIPA: '/ʃiˈʧieː/' }
				),
			},
			plural: {
				past: this.newTenseCheck(
					'Suffix',
					{ affix: '-(o)ñ', affixIPA: '/-(o)ɲ/' },
					{ name: 'ꝭiꞍiñ', nameIPA: '/ʃiˈʧiɲ/' }
				),
				present: this.newTenseCheck(
					'Suffix',
					{ affix: '-ï', affixIPA: '/-iː/' },
					{ name: 'ꝭiꞍiï', nameIPA: '/ʃiˈʧiiː/' }
				),
				future: this.newTenseCheck(
					'Suffix',
					{ affix: '-(o)ẟu', affixIPA: '/-oɖu/' },
					{ name: 'ꝭiꞍiẟu', nameIPA: '/ʃiˈʧiɖu/' }
				),
			},
		},
		second: {
			singular: {
				past: this.newTenseCheck(
					'Suffix',
					{ affix: '-(u)ẟ', affixIPA: '/-(u)ɖ/' },
					{ name: 'ꝭiꞍiẟ', nameIPA: '/ʃiˈʧiɖ/' }
				),
				present: this.newTenseCheck(
					'Suffix',
					{ affix: '-(i)ẟi', affixIPA: '/-iɖi/' },
					{ name: 'ꝭiꞍiẟi', nameIPA: '/ʃiˈʧiɖi/' }
				),
				future: this.newTenseCheck(
					'Suffix',
					{ affix: '-(o)ñ', affixIPA: '/-(o)ɲ/' },
					{ name: 'ꝭiꞍiñ', nameIPA: '/ʃiˈʧiɲ/' }
				),
			},
			plural: {
				past: this.newTenseCheck(
					'Suffix',
					{ affix: '-(i)ꝭ', affixIPA: '/-(i)ʃ/' },
					{ name: 'ꝭiꞍiꝭ', nameIPA: '/ʃiˈʧiʃ/' }
				),
				present: this.newTenseCheck(
					'Suffix',
					{ affix: '-(i)ꞗ', affixIPA: '/-(i)b/' },
					{ name: 'ꝭiꞍiꞗ', nameIPA: '/ʃiˈʧib/' }
				),
				future: this.newTenseCheck(
					'Suffix',
					{ affix: '-(e)ẟ', affixIPA: '/-(e)ɖ/' },
					{ name: 'ꝭiꞍiẟ', nameIPA: '/ʃiˈʧiɖ/' }
				),
			},
		},
		third: {
			singular: {
				past: this.newTenseCheck(
					'Suffix',
					{ affix: '-(i)n', affixIPA: '/-(i)n/' },
					{ name: 'ꝭiꞍin', nameIPA: '/ʃiˈʧin/' }
				),
				present: this.newTenseCheck(
					'Suffix',
					{ affix: '-(u)çu', affixIPA: '/-uʂu/' },
					{ name: 'ꝭiꞍiçu', nameIPA: '/ʃiˈʧiʂu/' }
				),
				future: this.newTenseCheck(
					'Suffix',
					{ affix: '-(i)ȝ', affixIPA: '/-(i)j/' },
					{ name: 'ꝭiꞍiȝ', nameIPA: '/ʃiˈʧij/' }
				),
			},
			plural: {
				past: this.newTenseCheck(
					'Suffix',
					{ affix: '-(ö)ᵹo', affixIPA: '/-oːgo/' },
					{ name: 'ꝭiꞍiᵹo', nameIPA: '/ʃiˈʧigo/' }
				),
				present: this.newTenseCheck(
					'Suffix',
					{ affix: '-(i)ȝ', affixIPA: '/-(i)j/' },
					{ name: 'ꝭiꞍiȝ', nameIPA: '/ʃiˈʧij/' }
				),
				future: this.newTenseCheck(
					'Suffix',
					{ affix: '-(e)ꞥ', affixIPA: '/-(e)ɳ/' },
					{ name: 'ꝭiꞍiꞥ', nameIPA: '/ʃiˈʧiɳ/' }
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

	tenseP(name: string, IPA: string) { return `<p> <b>${name}<br /> ${IPA} </b> </p>`; }

	newTenseCheck(affixName: string, { affix, affixIPA }: Affix, { name, nameIPA }: Name): string {
		return `${affixName}: ${this.tenseP(affix, affixIPA)} ${this.tenseP(name, nameIPA)}`;
	}

	capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

	subscript = (word: string, type: string): string => `(${word})<sub> <b>${type}</b> </sub> `;
	partOfSpeech = (): PartOfSpeech => ({
		Subject: this.subscript('Mary', 'Sub'),
		Oblique: this.subscript('with a key', 'Obl'),
		Object: this.subscript('the door', 'Obj'),
		Verb: this.subscript('opened', 'Verb'),
	})

	getBrackets = (string: string): string => `<b>[ </b> ${string.trim()} <b> ]</b>`;
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
	 * @param	{string} lang the language to get the word order for
	 * @returns {string}
	 */
	getWordOrder(lang: string): string {
		const { Subject, Verb, Object, Oblique } = this.partOfSpeech();
		switch (lang) {
			case 'English': return this.getBrackets(Subject + Verb + Object + Oblique);
			case 'NewLang': return this.getBrackets(Subject + Oblique + Object + Verb);
			default: return;
		}
	}

	/**
	 * checks the tense to determine which table header to display
	 * @param	{string} tenseCheck the tense to be checked
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
