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
} from '../grammar.model';

interface Affix { affix: string; affixIPA: string; }
interface Name { name: string; nameIPA: string; }

@Component({
	selector: 'app-morphology',
	templateUrl: './morphology.component.html',
	styleUrls: ['./morphology.component.css']
})

export class MorphologyComponent implements OnInit {
	constructor() { }
	// tslint:disable:member-ordering
	derivRule = (affixName: string, affix: string): string => `<i>${affixName}:</i> <br /> <b> ${affix} </b>`;
	getAffix = ({ affix, affixIPA }: Affix): string => `<p> <i> ${affix} <br /> ${affixIPA} </i> </p>`;
	getName = ({ name, nameIPA }: Name): string => `<p> ${name} <br /> ${nameIPA} </p>`;
	newMorph = (affixName: string, affix: Affix, name: Name) => `<i>${affixName}: </i>
	  <b> ${this.getAffix(affix)} ${this.getName(name)} </b>`

	derivMorph = {
		NounToAdj: {
			name: '<b>Noun → adjective</b>:',
			rule: this.derivRule('Suffix', '-(i)Ɥü /-iʧuː/'),
		},
		AdjToNoun: {
			name: '<b>Adjective → noun</b>:',
			rule: this.derivRule('Suffix', '-e /-e/'),
		},
		NounToVerb: {
			name: '<b>Noun → verb</b>:',
			rule: this.derivRule('Prefix', 'ᵹä- /gaː-/'),
		},
		VerbToNoun: {
			name: '<b>Verb → noun</b>:',
			rule: this.derivRule('Suffix', '-(i)ȝ /-(i)j/'),
		},
		VerbToAdv: {
			name: '<b>Verb → adjective</b>:',
			rule: this.derivRule('Suffix', '-e /-e/'),
		},
		AdjToAdv: {
			name: '<b>Adjective → adverb</b>:',
			rule: this.derivRule('Suffix', '-(e)ẟe /-eɖe/'),
		},
		OneWho: {
			name: '<b>One who Xs (e.g. paint → painter)</b>:',
			rule: this.derivRule('Suffix', '-(o)b /-(o)b/'),
		},
		Loc: {
			name: '<b>Place where (e.g. wine → winery)</b>:',
			rule: this.derivRule('Prefix', ' Ɥ(i)- /ʧ(i)-/'),
		},
		Dim: {
			name: '<b>Diminutive</b>:',
			rule: this.derivRule('Suffix', '-ï /-iː/'),
		},
		Augm: {
			name: '<b>Augmentative</b>:',
			rule: this.derivRule('Suffix', '-(o)bü /-obuː/'),
		}
	};

	DerivMorphNames: string[] = Object.keys(this.derivMorph);
	nounMorphNameType: Article = {
		Nominative: {
			singular: 'man',
			plural: 'men',
		},
		Accusative: {
			singular: 'man',
			plural: 'men',
		},
		Genitive: {
			singular: 'man\'s',
			plural: 'men\'s',
		},
		Dative: {
			singular: 'to [the/a] man',
			plural: 'to men',
		},
		Locative: {
			singular: 'in/at/by [the/a] man',
			plural: 'in/at/by [the/some] men',
		},
	};

	nounMorph: Article = {
		Nominative: {
			singular: '<b><p> ꞗü <br /> /buː/ </p></b>',
			plural: `<i> <b>No plural marker</b> </i>
				<br /> <b><p> ꞗü <br /> /buː/ </p></b>`,
		},
		Accusative: {
			singular: this.newMorph(
				'Prefix',
				{ affix: 'i-', affixIPA: '/i-/' },
				{ name: 'iꞗü', nameIPA: '/iˈbuː/' }
			),
			plural: `<i> <b>No plural marker</b> </i>
				<br /> <b><p> ꞗü <br /> /buː/ </p></b>`,
		},
		Genitive: {
			singular: this.newMorph(
				'Suffix',
				{ affix: '-ï', affixIPA: '/-iː/' },
				{ name: 'ꞗüï', nameIPA: '/buːˈiː/' }
			),
			plural: `<i> <b>No plural marker</b> </i>
				<br /> <b><p> ꞗü <br /> /buː/ </p></b>`,
		},
		Dative: {
			singular: this.newMorph(
				'Suffix',
				{ affix: '-e', affixIPA: '/-e/' },
				{ name: 'ꞗüe', nameIPA: '/buːˈe/' }
			),
			plural: `<i> <b>No plural marker</b> </i>
				<br /> <b><p> ꞗü <br /> /buː/ </p></b>`,
		},
	};

	pronNounMorph = Object.keys(this.nounMorph);

	ngOnInit() { }
}
