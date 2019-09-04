export interface Words {
	order: string;
	adOrder: string;
	adposition: string;
}
export interface PartOfSpeech {
	Subject: string;
	Oblique: string;
	Object: string;
	Verb: string;
}
export interface Example {
	indefArt: string;
	defArt: string;
}
export interface Tenses {
	past: string;
	present: string;
	future: string;
}
export interface Get {
	wordOrder: string;
	tense: Tenses;
}
export interface PronDef {
	Nominative: string;
	Accusative: string;
	Genitive: string;
	Dative: string;
}
interface TenseType {
	singular: Tenses;
	plural: Tenses;
}
export interface AllTenses {
	first: TenseType;
	second: TenseType;
	third: TenseType;
}
interface PronounType {
	singular: PronDef;
	plural: PronDef;
}
export interface Pronouns {
	first: PronounType;
	second: PronounType;
	third: PronounType;
}
interface Number {
	singular: string;
	plural: string;
}
export interface Article {
	Nominative?: Number;
	Accusative?: Number;
	Genitive?: Number;
	Dative?: Number;
	Locative?: Number;
}
