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
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

	constructor() { }
	defArticleNameType: Article = {
		Nominative: {
			singular: '<i>the [man]</i>',
			plural: '<i>the [men]</i>',
		},
		Accusative: {
			singular: '<i>the [man]</i>',
			plural: '<i>the [men]</i>',
		},
		Genitive: {
			singular: '<i>the [man\'s]</i>',
			plural: '<i>the [man\'s]</i>',
		},
		Dative: {
			singular: '<i>to the [man]</i>',
			plural: '<i>to the [men]</i>',
		},
		Locative: {
			singular: '<i>in/at/by the [man]</i>',
			plural: '<i>in/at/by the [men]</i>',
		}
	};
	defArticle: Article = {
		Nominative: {
			singular: this.defType('ȼo', 'ʤo'),
			plural: this.defType('pe', 'pe'),
		},
		Accusative: {
			singular: this.defType('nip', 'nip'),
			plural: this.defType('ᵹit', 'git'),
		},
		Genitive: {
			singular: this.defType('ʈep', 'ʈep'),
			plural: this.defType('ȼoȝ', 'ʤoj'),
		},
		Dative: {
			singular: this.defType('ỻuç', 'ɣuʂ'),
			plural: this.defType('ᵹöȝ', 'goːj'),
		}
	};
	pronDefArticle = Object.keys(this.defArticle);
	defType(word: string, IPA: string): string { return `<p><b> ${word} <br /> /${IPA}/ </b></p>`; }
	getBrackets = (string: string): string => `<b>[ </b> ${string} <b> ]</b>`;
	example = (): Example => ({
		indefArt: 'There is no indefinite article',
		defArt: this.getBrackets('Example: ‘I am going to jacuzzi’'),
	})

	ngOnInit() { }

}
