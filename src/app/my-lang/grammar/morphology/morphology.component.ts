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

@Component({
	selector: 'app-morphology',
	templateUrl: './morphology.component.html',
	styleUrls: ['./morphology.component.css']
})
export class MorphologyComponent implements OnInit {

	constructor() { }
	derivMorph = {
		NounToAdj: {
			name: '<b>Noun → adjective</b>:',
			rule: this.derivRule('Suffix', '-(i)ȼü /iʤuː/'),
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
			rule: this.derivRule('Suffix', '-(e)ꝺe /ede/'),
		},
		OneWho: {
			name: '<b>One who Xs (e.g. paint → painter)</b>:',
			rule: this.derivRule('Suffix', '-(o)b /-(o)b/'),
		},
		Loc: {
			name: '<b>Place where (e.g. wine → winery)</b>:',
			rule: this.derivRule('Prefix', ' ꞇ(i)- /ʧ(i)-/'),
		},
		Dim: {
			name: '<b>Diminutive</b>:',
			rule: this.derivRule('Suffix', '-ï /-iː/'),
		},
		Augm: {
			name: '<b>Augmentative</b>:',
			rule: this.derivRule('Suffix', '-(o)bü /obuː/'),
		},
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
			singular: '<b><p> pü <br /> /puː/ </p></b>',
			plural: this.newMorph(
				'No plural marker',
				'', '',
				'ppü', '/ppuː/',
			),
		},
		Accusative: {
			singular: this.newMorph(
				'Prefix',
				'i-', '/i-/',
				'ipü', '/iˈpuː/'
			),
			plural: this.newMorph(
				'No plural marker',
				'', '',
				'ꭓpü', '/ɣpuː/'
			),
		},
		Genitive: {
			singular: this.newMorph(
				'Suffix',
				'-ï', '/-iː/',
				'püï', '/puːˈiː/'
			),
			plural: this.newMorph(
				'No plural marker',
				'', '',
				'ȼpü', '/ʤpuː/'
			),
		},
		Dative: {
			singular: this.newMorph(
				'Suffix',
				'-e', '/-e/',
				'püe', '/puːˈe/'
			),
			plural: this.newMorph(
				'No plural marker',
				'', '',
				'opü', '/oˈpuː/'
			),
		},
	};
	pronNounMorph = Object.keys(this.nounMorph);

	derivRule(affixName, affix) { return `<i>${affixName}:</i> <br /> <b> ${affix} </b>`; }
	newMorph(affixName, affix, affixIPA, name, nameIPA) {
		return `<i>${affixName}: </i>
		<b>
			<p> <i> ${affix} <br /> ${affixIPA} </i> </p>
			<p> ${name} <br /> ${nameIPA} </p>
		</b>`;
	}
	ngOnInit() { }

}
