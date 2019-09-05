import { newLanguage, NewLang } from '../lang-vars.model';

export interface Affix {
	IPA: string;
	word: string;
	engWord?: string;
}

export interface NewAffix {
	word: string;
	IPA: string;
	type?: string;
	prefix?: string;
	suffix?: string;
	engWord?: string;
}

export interface GetAffix {
	lang: Affix;
	engWord: string;
}

export interface Prefix extends Affix {
	type?: 'prefix';
	prefix: string;
}

export interface Suffix extends Affix {
	type?: 'suffix';
	suffix: string;
}

export interface AllWords {
	langText: string;
	langIPA: string;
	wordOrder: string;
	getPartOfSpeech: string;
}

export interface Translation {
	display: { display: string; };
	english: string;
	langWord: string;
	IPA: string;
}

interface AffixCheck {
	type: string;
	prefix?: string;
	suffix?: string;
}

export function getTrim(obj: AllWords): AllWords {
	Object.keys(obj).map(item => {
		obj[item] = obj[item].trim();
	});
	return obj;
}

export const blankSpace = ' ';
export const addBlank = (word: string): string => word + blankSpace;

const returnObject = (word: string): GetAffix => ({
	lang: { IPA: '', word: '' },
	engWord: word,
});

function getLangPOS(getWord: string): void {
	const POS = {
		verbs: [],
		nouns: [],
		adjectives: [],
		pronouns: [],
		adverbs: [],
		determiners: [],
		prepositions: [],
		numbers: [],
		interjections: [],
		conjunctions: [],
		negation: [],
		articles: [],
		r: [],
		c: [],
	};
	newLanguage.map(langWord => {
		const { partOfSpeech, engWord } = langWord;
		switch (partOfSpeech) {
			case 'verb':
				POS.verbs.push(engWord);
				break;
			case 'noun':
				POS.nouns.push(engWord);
				break;
			case 'adjective':
				POS.adjectives.push(engWord);
				break;
			case 'pronoun':
				POS.pronouns.push(engWord);
				break;
			case 'adverb':
				POS.adverbs.push(engWord);
				break;
			case 'determiner':
				POS.determiners.push(engWord);
				break;
			case 'preposition':
				POS.prepositions.push(engWord);
				break;
			case 'number':
				POS.numbers.push(engWord);
				break;
			case 'interjection':
				POS.interjections.push(engWord);
				break;
			case 'conjunction':
				POS.conjunctions.push(engWord);
				break;
			case 'negation':
				POS.negation.push(engWord);
				break;
			case 'article':
				POS.articles.push(engWord);
				break;
			case 'r.':
				POS.r.push(engWord);
				break;
			case 'c.':
				POS.c.push(engWord);
				break;
		}
	});
}

const addAffix = (newVar: string, obj: NewAffix, IPA?: string): string => {
	switch (obj.type) {
		case 'prefix':
			return (IPA) ? `${IPA}${newVar}` : `${obj.prefix}${newVar}`;
		case 'suffix':
			return (IPA) ? `${newVar}${IPA}` : `${newVar}${obj.suffix}`;
	}
};

function getAffix(obj: NewAffix): Affix {
	let getWord: Affix;
	newLanguage.map(newLangWord => {
		if (newLangWord.engWord === obj.word) {
			let ipaAffix = newLangWord.IPA.slice(1, -1);
			ipaAffix = addAffix(ipaAffix, obj, obj.IPA);
			getWord = {
				IPA: `/${ipaAffix.trim()}/`,
				word: addAffix(newLangWord.langWord, obj),
			};
		}
	});
	return getWord;
}

const getWordAffix = (obj: NewAffix): GetAffix => {
	const lang: AffixCheck = ('prefix' in obj)
		? { type: 'prefix', prefix: obj.prefix }
		: { type: 'suffix', suffix: obj.suffix };
	return {
		lang: getAffix({
			...lang,
			IPA: obj.IPA,
			word: obj.word
		}),
		engWord: obj.engWord,
	};
};

export function ingCheck(word: string): GetAffix {
	let ingWord: { word: string };
	switch (word) {
		case 'typing':
			ingWord = { word: 'type' }; break;
		case 'doing':
			ingWord = { word: 'do' }; break;
		case 'watering':
			ingWord = { word: 'water' }; break;
		case 'eating':
			ingWord = { word: 'eat' }; break;
		case 'accepting':
			ingWord = { word: 'accept' }; break;
		case 'filming':
			ingWord = { word: 'film' }; break;
		case 'calming':
			ingWord = { word: 'calm' }; break;
		case 'provoking':
			ingWord = { word: 'provoke' }; break;
		case 'blessing':
			ingWord = { word: 'bless' }; break;
		case 'going':
			ingWord = { word: 'go' }; break;
		case 'getting':
			ingWord = { word: 'get' }; break;
		default: return returnObject(word);
	}
	return getWordAffix({ ...ingWord, suffix: 'iȝ', IPA: '/ij/', engWord: word });
}

export function ionCheck(word: string): GetAffix {
	switch (word) {
		case 'translation':
			return getWordAffix({ word: 'translate', prefix: 'u', IPA: '/u/', engWord: word });
		default: return returnObject(word);
	}
}

export function plurCheck(word: string): GetAffix {
	let affix: GetAffix;
	switch (word) {
		case 'words':
			affix = getWordAffix({ word: 'word', prefix: 'ɥü', IPA: '/huː/', engWord: word });
			break;
		default:
			affix = getWordAffix({ word: word.slice(0, -1), prefix: 'ɥe', IPA: '/hʷe/', engWord: word });
			break;
	}
	return (/e?s$/.test(word)) ? affix : returnObject(word);
}

export function thirdSingular(word: string): NewLang {
	let newIt: {
		langWord: string,
		IPA: string,
		engWord: string
	};
	switch (word) {
		case 'he':
		case 'she':
			newIt = { langWord: 'ɥeb', IPA: '/hʷeb/', engWord: 'it' };
			break;
		case 'him':
		case 'her':
			newIt = { langWord: 'ꝡᵹ', IPA: '/hʷig/', engWord: 'it' };
			break;
		case 'his':
		case 'hers':
			newIt = { langWord: 'ɥaƙ', IPA: '/hʷac/', engWord: 'its' };
			break;
		case 'to him':
		case 'to her':
			newIt = { langWord: 'ɥöȝ', IPA: '/hʷoːj/', engWord: 'to it' };
			break;
		// default: return word;
	}
	return { ...newIt, partOfSpeech: 'pronoun' };
}

export function personCheck(word: string): GetAffix {
	let getWord: { word: string };

	if (/er$/.test(word)) {
		getWord = { word: word.slice(0, -2) };
	} else if (word === 'baker') {
		getWord = { word: 'bake' };
	} else if (word === 'psychologist') {
		getWord = { word: 'psychology' };
	} else {
		return returnObject(word);
	}
	return getWordAffix({ ...getWord, prefix: 'ꝭe', IPA: '/ʃe/', engWord: word });
}

export function reverseIon(getNew: NewLang, newLangWord: NewLang): { word: string; } {
	console.log('ion');
	// console.log('getNew.engWord', getNew.engWord);
	// console.log('newLangWord.engWord', newLangWord.engWord);
	let getWord: { word: string; };
	if (getNew.engWord === newLangWord.engWord) {
		switch (getNew.engWord) {
			case 'translate':
				getWord = { word: 'translation' };
				break;
		}
		return getWord;
	} else {
		return { word: '' };
	}
}

export function reversePerson(getNew: NewLang, newLangWord: NewLang): { word: string; } {
	console.log('person');
	// console.log('getNew.engWord', getNew.engWord);
	// console.log('newLangWord.engWord', newLangWord.engWord);
	let getWord: { word: string; };
	if (getNew.engWord === newLangWord.engWord) {
		if (/er$/.test(getNew.engWord)) {
			// /er$/.test(word)
			getWord = { word: getNew.engWord.slice(0, -2) };
		} else if (getNew.engWord === 'bake') {
			getWord = { word: 'baker' };
		} else if (getNew.engWord === 'psychology') {
			getWord = { word: 'psychologist' };
		}
		return getWord;
	} else {
		return { word: '' };
	}
}

export function reversePlur(getNew: NewLang, newLangWord: NewLang): { word: string; } {
	console.log('plur');
	// console.log('getNew.engWord', getNew.engWord);
	// console.log('newLangWord.engWord', newLangWord.engWord);
	let getWord: { word: string; };
	let newWord: { prefix: string; IPA: string; };
	if (getNew.engWord === newLangWord.engWord + 's') {
		switch (getNew.engWord) {
			case 'word':
			case 'words':
				getWord = { word: getNew.engWord };
				newWord = { prefix: 'ɥü', IPA: '/huː/' };
				break;
			default:
				getWord = { word: getNew.engWord.slice(0, -1) };
				newWord = { prefix: 'ɥe', IPA: '/hʷe/' };
				break;
		}
		return getWord;
	} else {
		return { word: '' };
	}
}

export function reverseIng(getNew: NewLang, newLangWord: NewLang): { word: string; } {
	console.log('ing');
	// console.log('getNew.engWord', getNew.engWord);
	// console.log('newLangWord.engWord', newLangWord.engWord);
	let getWord: { word: string };
	if (getNew.engWord === newLangWord.engWord) {
		switch (getNew.engWord) {
			case 'type':
				getWord = { word: 'typing' };
				break;
			case 'do':
				getWord = { word: 'doing' };
				break;
			case 'water':
				getWord = { word: 'watering' };
				break;
			case 'eat':
				getWord = { word: 'eating' };
				break;
			case 'accept':
				getWord = { word: 'accepting' };
				break;
			case 'film':
				getWord = { word: 'filming' };
				break;
			case 'calm':
				getWord = { word: 'calming' };
				break;
			case 'provoke':
				getWord = { word: 'provoking' };
				break;
			case 'bless':
				getWord = { word: 'blessing' };
				break;
			case 'go':
				getWord = { word: 'going' };
				break;
			case 'get':
				getWord = { word: 'getting' };
				break;
			// default: return returnObject(word);
		}
		return getWord;
	} else {
		return { word: '' };
	}
}
