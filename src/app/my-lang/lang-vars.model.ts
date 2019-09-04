// tslint:disable-next-line:max-line-length
// partOfSpeech2?: '((?!noun|verb|adjective|pronoun|adverb|preposition|determiner|number|interjection|conjunction|negation|article|r\.|c\.).)*$
// tslint:disable-next-line:max-line-length
// partOfSpeech2?: '((?!noun|verb|adjective|pronoun|adverb|preposition|determiner|number|interjection|conjunction|negation|article|r\.|c\.).)*$
/*
	(record|book)
	'start typing to see the translation',
	----------------------------------------------------------------
	constList: [p b t d ʈ ɖ k g ʔ m n ɳ ɲ ʃ c ʂ x x hʷ hʷi j ʍ ʍi ɽ];
	constList: [p b t d ʈ ɖ k ᵹ ʯ m n ꞥ ñ ꝭ ƙ ç ỻ ꭓ ɥ ꝡ ȝ ɥ ꝡ ꝛ];
	----------------------------------------------------------------
	ʊ̃ ɯː
	----------------------------------------------------------------
	b > b
	t > t
	ʈ > ʈ
	ɖ > ɖ
	g > ᵹ
	ʔ > ʯ
	m > m
	n > n
	ɳ > ꞥ
	ɲ > ñ
	ʃ > ꝭ
	c > ƙ
	ʂ > ç
	x > ỻ OR ꭓ
	j > ȝ
	hʷi OR ʍi > ꝡ
	hʷ OR ʍ > ɥ
	ɽ > ꝛ
	aː > ä
	eː > ë
	iː > Ï
	oː > ö
	uː > ü
	ɯ > ʊ
	----------------------------------------------------------------
	tʃ > ʃ
	dc > c
	aː > ä
	eː > ë
	iː > ï
	oː > ö
	uː > ü
	----------------------------------------------------------------
	constList3 = constList1.map((sound, i) => [sound, constList2[i]]);
	console.log('constList3', constList3);
	----------------------------------------------------------------
	(partOfSpeech)(: '.*',)(\n\t+)(engWord)(: '.*),(.*',)
	$1$2$3$4$5',$3($1)2$2$3($4)2: '$6
	----------------------------------------------------------------
	vowelList: a aː e eː i iː o oː u uː ɯ
	vowelList: a ä e ë i ï o ö u ü ʊ
	----------------------------------------------------------------
	constList1 = ['p', 'b', 't', 'd', 'ʈ', 'ɖ', 'k', 'g', 'ʔ', 'm', 'n', 'ɳ', 'ɲ', 'ʃ', 'c', 'ʂ', 'x', 'x', 'hʷ', 'hʷi', 'j', 'ʍ', 'ʍi', 'ɽ'];
	constList2 = ['p', 'b', 't', 'd', 'ʈ', 'ɖ', 'k', 'ᵹ', 'ʯ', 'm', 'n', 'ꞥ', 'ñ', 'ꝭ', 'ƙo', 'ç', 'ỻ', 'ꭓ', 'ɥ', 'ꝡ', 'ȝ', 'ɥ', 'ꝡ', 'ꝛ'];
	(langWord: '.*)ꝷ(.*',)
	$1ʈ$2
	----------------------------------------------------------------
	(engWord: '.*er',)(?:\n|.)

	(^[\w,]+$)
	'$1',
*/
interface ConstList {
	sound: string;
	letter: string;
}

export const getIPA = (langIPA: string): string => `/${langIPA}/`;

export function capitalize(text: string): string {
	const textCapital = text.charAt(0).toUpperCase();
	const textLower = text.slice(1).toLowerCase();
	text = (text && text.charAt(0) === 'ꭓ') ? `Ꭓ${textLower}`
		: (text !== '') ? `${textCapital}${textLower}`
			: '';
	let getText = '';
	for (const letter of text) {
		switch (letter) {
			// case 'ⱶ': getText += 'Ⱶ'; break;
			default: getText += letter; break;
		}
	}
	return getText;
}

export interface NewLang {
	langWord: string;
	IPA: string;
	partOfSpeech: string;
	engWord: string;
	engWordDesc?: string;
	partOfSpeech2?: string;
	engWord2?: string;
	engWord2Desc?: string;
}

export const erWordsDefaults: string[] = [
	'oyster',
	'matter',
	'corner',
	'platter',
	'murder',
	'foster',
	'never',
	'danger',
	'tiger',
	'thunder',
	'after',
	'usher',
	'confer',
	'render',
	'locker',
	'grandmother',
	'winter',
	'wander',
	'character',
	'powder',
	'discover',
	'clever',
	'peer',
	'over',
	'water',
	'trigger',
	'ginger',
	'transfer',
	'later',
	'player',
	'diaper',
	'sister',
	'better',
	'weather',
	'bunker',
	'after',
	'master',
	'parameter',
	'former',
	'cracker',
	'number',
	'gather',
	'answer',
	'grandfather',
	'either',
	'under',
	'uncover',
	'deter',
	'rather',
	'diner',
	'soldier',
	'cover',
	'linger',
	'differ',
	'slender',
	'rubber',
	'cheer',
	'remember',
	'better',
	'bother',
	'flower',
	'anger',
	'container',
	'letter',
	'deliver',
	'frontier',
	'shoulder',
	'teenager',
	'fiber',
	'tower',
	'over',
	'other',
	'hammer',
	'silver',
	'shiver',
	'register',
	'leader',
	'another',
	'neither',
	'folder',
	'spider',
	'brother',
	'publisher',
	'power',
	'summer',
	'refer',
	'sewer',
	'cater',
	'bolster',
	'diameter',
	'recover',
	'order',
	'father',
	'answer',
	'trader',
	'simmer',
	'roster',
	'dealer',
	'shatter',
	'partner',
	'matter',
	'ponder',
	'lever',
	'monster',
	'daughter',
	'surrender',
	'leather',
	'member',
	'temper',
	'perimeter',
	'forever',
	'batter',
	'officer',
	'rather',
	'copper',
	'together',
	'paper',
	'beer',
	'quarter',
	'copper',
	'teacher',
	'burger',
	'consider',
	'owner',
	'drawer',
	'grocer',
	'wonder',
	'disaster',
	'feather',
	'offer',
	'however',
	'hover',
	'waiter',
	'manager',
	'premier',
	'loser',
	'volunteer',
	'whisper',
	'sweater',
	'sober',
	'boulder',
	'liver',
	'carrier',
	'finger',
	'per',
	'eager',
	'encounter',
	'supper',
	'conquer',
	'trailer',
	'enter',
	'banner',
	'forefather',
	'lobster',
	'ever',
	'crater',
	'river',
	'rather',
	'order',
	'whether',
	'whatever',
	'semester',
	'writer',
	'keeper',
	'other',
	'butter',
	'filter',
	'manner',
	'career',
	'toddler',
	'voucher',
	'cylinder',
	'mother',
];

export const istWordsDefaults: string[] = [
	'insist',
	'mist',
	'florist',
	'mist',
	'resist',
	'enlist',
	'persist',
	'moist',
	'protagonist',
	'list',
	'dentist',
	'exist',
	'waist',
	'tourist',
	'twist',
	'assist',
	'specialist',
	'chemist',
	'wrist',
];

export const ionWordsDefaults: string[] = [
	'friction',
	'restoration',
	'competition',
	'destination',
	'proliferation',
	'recession',
	'elimination',
	'religion',
	'foundation',
	'accommodation',
	'question',
	'permission',
	'succession',
	'organisation',
	'opinion',
	'direction',
	'commission',
	'conviction',
	'champion',
	'vacation',
	'perception',
	'fashion',
	'station',
	'vision',
	'petition',
	'location',
	'affection',
	'emotion',
	'concession',
	'allocation',
	'passion',
	'education',
	'resolution',
	'motion',
	'cushion',
	'recognition',
	'circulation',
	'infection',
	'perfection',
	'retention',
	'revolution',
	'information',
	'tuition',
	'regression',
	'portion',
	'erection',
	'ammunition',
	'tension',
	'million',
	'observation',
	'attention',
	'examination',
	'detention',
	'condition',
	'impression',
	'illusion',
	'nutrition',
	'option',
	'commission',
	'mansion',
	'region',
	'section',
	'fashion',
	'cushion',
	'disposition',
	'constellation',
	'projection',
	'distinction',
	'intervention',
	'action',
	'lion',
	'envision',
	'compassion',
	'plantation',
	'nation',
	'constitution',
	'fiction',
	'potion',
	'sensation',
	'population',
	'mention',
	'recreation',
	'provision',
	'transition',
	'caution',
	'administration',
	'position',
	'trillion',
	'elevation',
	'repetition',
	'tradition',
	'protection',
	'ambition',
	'reflection',
	'suggestion',
	'decision',
	'election',
	'explanation',
	'organisation',
	'description',
	'preparation',
	'destruction',
	'division',
	'expression',
	'litigation',
	'situation',
	'billion',
	'addiction',
	'reservation',
];

export const ingWordsDefaults: string[] = [
	'concerning',
	'pending',
	'king',
	'marketing',
	'earring',
	'amazing',
	'stunning',
	'sibling',
	'anything',
	'according',
	'something',
	'building',
	'offspring',
	'lightning',
	'morning',
	'daunting',
	'regarding',
	'thing',
	'overwhelming',
	'swing',
	'ring',
	'bring',
	'including',
	'ring',
	'darling',
	'clothing',
	'ring',
	'fling',
	'nothing',
	'wing',
	'missing',
	'evening',
	'during',
	'painting',
	'sing',
	'opening',
	'everything',
	'training',
	'meeting',
	'feeling',
	'spelling',
	'hearing',
	'wedding',
	'boring',
	'string',
];

import { Symbols } from './data/data.model';

export function letterSort(source: string): Symbols[] {
	const newLanguageTable: string[] = newLanguage.map(get => get.langWord);
	const symbols: Symbols[] = [
		{ symbol: 'p', count: 0 },
		{ symbol: 'b', count: 0 },
		{ symbol: 't', count: 0 },
		{ symbol: 'ʈ', count: 0 },
		{ symbol: 'ɖ', count: 0 },
		{ symbol: 'k', count: 0 },
		{ symbol: 'ᵹ', count: 0 },
		{ symbol: 'ʯ', count: 0 },
		{ symbol: 'm', count: 0 },
		{ symbol: 'n', count: 0 },
		{ symbol: 'ꞥ', count: 0 },
		{ symbol: 'ñ', count: 0 },
		{ symbol: 'ꞇ', count: 0 },
		{ symbol: 'ȼ', count: 0 },
		{ symbol: 'ç', count: 0 },
		{ symbol: 'ỻ', count: 0 },
		{ symbol: 'ꭓ', count: 0 },
		{ symbol: 'ꝩ', count: 0 },
		{ symbol: 'ꝡ', count: 0 },
		{ symbol: 'ȝ', count: 0 },
		{ symbol: 'ꝛ', count: 0 },
		{ symbol: 'a', count: 0 },
		{ symbol: 'ä', count: 0 },
		{ symbol: 'e', count: 0 },
		{ symbol: 'ë', count: 0 },
		{ symbol: 'i', count: 0 },
		{ symbol: 'ï', count: 0 },
		{ symbol: 'o', count: 0 },
		{ symbol: 'ö', count: 0 },
		{ symbol: 'u', count: 0 },
		{ symbol: 'ü', count: 0 },
		{ symbol: 'ʊ', count: 0 },
	];
	newLanguageTable.forEach(word => {
		symbols.forEach(symbol => {
			const wordStart: string = word[0].toLowerCase();
			const getString: string = symbol.symbol.toLowerCase();
			switch (source) {
				case 'lexicon':
					if (wordStart === getString) { symbol.count++; }
					break;
				case 'data':
					for (const letter of word) {
						if (letter === symbol.symbol) { symbol.count++; }
					}
					break;
			}
		});
	});
	symbols.forEach(symbol => {
		if (symbol.symbol !== 'ʯ') {
			symbol.symbol = capitalize(symbol.symbol) + ' ' + symbol.symbol;
		}
	});

	const Sorter = (a: number, b: number): number => (a < b) ? -1 : (a > b) ? 1 : 0;
	return symbols.sort((a, b) => Sorter(b.count, a.count));
}


import language from './dictionary.json';
export const newLanguage: NewLang[] = language.dictionary;
export const nameSort: { [propName: string]: string[]; } = language.namesList;

/*
	p b t d ʈ ɖ k ᵹ ʯ m n ꞥ ñ ꝭ ƙ ç ỻ ꭓ ɥ ꝡ ȝ ɥ ꝡ ꝛ
	a ä e ë i ï o ö u ü ʊ
*/
let getNames: string[] = [];
let getNames2: GetLangNames[] = [];
for (const letter in nameSort) {
	getNames = [
		...getNames,
		...nameSort[letter]
	];
}
export const allNames = getNames;
interface GetLangNames { engName: string; langName: string; }
export const langNames = (nameLetter: string[]): GetLangNames[] => nameLetter.map(name => {
	function getName(engName: string, engLetters: string) {
		engName = engName.toLowerCase();
		engLetters = engLetters.toLowerCase();
		return (engName.indexOf(engLetters) >= 0);
	}

	let newName: any = name;

	interface GetLetters { engLett: string; regex: RegExp; langLett: string; }
	function twoLetterCheck(getLetters: GetLetters[]) {
		getLetters.forEach(element => {
			const { engLett, regex } = element;
			let { langLett } = element;
			if (getName(name, engLett)) {
				langLett = langLett.toLowerCase();
				newName = newName
					.replace(regex, langLett);
			}
		});
	}

	/** Changes specific letter combinations */
	twoLetterCheck([
		{ engLett: 'ph', regex: /ph/i, langLett: 'B' },
		{ engLett: 'gh', regex: /gh/i, langLett: 'Ꭓ' },
		{ engLett: 'zh', regex: /zh/i, langLett: 'Ꭓ' },
		{ engLett: 'kh', regex: /kh/i, langLett: 'Ꭓ' },
		{ engLett: 'ch', regex: /ch/i, langLett: 'Ꝭ' },
		{ engLett: 'sh', regex: /sh/i, langLett: 'Ꝭ' },
		{ engLett: 'ny', regex: /ny/i, langLett: 'Ñ' },
		{ engLett: 'll', regex: /ll/i, langLett: 'L' },
		{ engLett: 'tt', regex: /tt/i, langLett: 'T' },
		{ engLett: 'dd', regex: /dd/i, langLett: 'D' },
		{ engLett: 'ck', regex: /ck/i, langLett: 'K' },
		{ engLett: 'rr', regex: /rr/i, langLett: 'R' },
		{ engLett: 'ss', regex: /ss/i, langLett: 'S' },
		{ engLett: 'qu', regex: /qu/i, langLett: 'Ꝡ' },
		{ engLett: 'ah', regex: /ah/i, langLett: 'Ä' },
		{ engLett: 'aa', regex: /aa/i, langLett: 'Ä' },
		{ engLett: 'ee', regex: /ee/i, langLett: 'Ë' },
		{ engLett: 'eh', regex: /eh/i, langLett: 'Ë' },
		{ engLett: 'ii', regex: /ii/i, langLett: 'Ï' },
		{ engLett: 'ih', regex: /ih/i, langLett: 'Ï' },
		{ engLett: 'oo', regex: /oo/i, langLett: 'Ö' },
		{ engLett: 'oh', regex: /oh/i, langLett: 'Ö' },
		{ engLett: 'uu', regex: /uu/i, langLett: 'Ü' },
		{ engLett: 'uh', regex: /uh/i, langLett: 'Ü' },
		{ engLett: 'ty', regex: /[Tt][Ȝȝ]/i, langLett: 'TÏ' },
		{ engLett: 'ty', regex: /[Ʈʈ][Ȝȝ]/i, langLett: 'ƮÏ' },
		{ engLett: 'ry', regex: /[Ꝛꝛ][Ȝȝ]/i, langLett: 'ꝚÏ' },
	]);

	let langName = '';
	for (const letter in newName) {
		const findLetter = (getLetter: string) => (newName[letter].toLowerCase() === getLetter);
		langName += findLetter('z') ? 'ç'
			: findLetter('s') ? 'ç'
				: findLetter('p') ? 'b'
					: findLetter('f') ? 'b'
						: findLetter('g') ? 'ᵹ'
							: findLetter('y') ? 'ȝ'
								: findLetter('h') ? 'ɥ'
									: findLetter('r') ? 'ꝛ'
										: findLetter('t') ? 'ʈ'
											: findLetter('d') ? 'ɖ'
												: findLetter('v') ? 'ɖ'
													: findLetter('q') ? 'ỻ'
														: findLetter('l') ? 'ỻ'
															: findLetter('j') ? 'ƙ'
																: findLetter('c') ? 'k'
																	: findLetter('x') ? 'ꭓ'
																		: findLetter('k') ? 'ꭓ'
																			: newName[letter];
	}

	/** Changes specific names */
	twoLetterCheck([
		{ engLett: 'James', regex: /ƙameç/i, langLett: 'ƙämç' },
	]);

	langName = getName(name, 'Abdallah') ? 'Abɖäỻä'
		: getName(name, 'Abraham') ? 'Abꝛaꭓam'
			: getName(name, 'Ace') ? 'Äç'
				: getName(name, 'Charlie') ? 'Ꝭaꝛçï'
					: getName(name, 'Charly') ? 'Ꝭaꝛçï'
						: getName(name, 'Tyler') ? 'Ʈïỻeꝛ'
							: langName;
	return {
		engName: name,
		langName: capitalize(langName),
	};
});
const nameSort2: { [propName: string]: GetLangNames[]; } = {};
for (const letter in nameSort) {
	nameSort2[letter] = langNames(nameSort[letter]);
}

getNames2 = langNames(getNames);

// let getLangNames: string[] = getNames.map(name => name.langName);
// console.log('getLangNames', getLangNames);
for (const name in getNames2) {
	const newName = getNames2[name];
	switch (newName.engName) {
		case 'Charlie':
		case 'Charly':
		case 'James':
		case 'Joseph':
		case 'Tyler':
			console.log('getNames[name]', getNames[name]);
			break;
	}
}
/*
 */
