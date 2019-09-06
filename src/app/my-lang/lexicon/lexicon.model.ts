export interface SoundSymbols {
	sound: string;
	symbol: string;
}

export interface Lexicon {
	spelling: string;
	IPA: string;
	partOfSpeech: string;
	engWord: string;
	partOfSpeech2: string;
	engWord2: string;
}

export interface FirstWord {
	letter: string;
	word: string;
}

export const getSymbols: { symbol: string }[] = [
	{ symbol: 'a' },
	{ symbol: 'ꞗ' },
	{ symbol: 'e' },
	{ symbol: 'i' },
	{ symbol: 'k' },
	{ symbol: 'm' },
	{ symbol: 'o' },
	{ symbol: 'p' },
	{ symbol: 't' },
	{ symbol: 'u' },
	{ symbol: 'ä' },
	{ symbol: 'ç' },
	{ symbol: 'ë' },
	{ symbol: 'ï' },
	{ symbol: 'ñ' },
	{ symbol: 'ö' },
	{ symbol: 'ü' },
	{ symbol: 'ƙ' },
	{ symbol: 'ȝ' },
	{ symbol: 'Ɖ' },
	{ symbol: 'Ɥ' },
	{ symbol: 'ʈ' },
	{ symbol: 'ʊ' },
	{ symbol: 'ʯ' },
	{ symbol: 'ᵹ' },
	{ symbol: 'ỻ' },
	{ symbol: 'ꝛ' },
	{ symbol: 'ꝡ' },
	{ symbol: 'ꝭ' },
	{ symbol: 'ꞥ' },
	{ symbol: 'ꭓ' }
];

export const soundSymbols: SoundSymbols[] = [
	{ sound: 'p', symbol: 'p' },
	{ sound: 'b', symbol: 'ꞗ' },
	{ sound: 't', symbol: 't' },
	{ sound: 'ʈ', symbol: 'ʈ' },
	{ sound: 'Ɖ', symbol: 'Ɖ' },
	{ sound: 'k', symbol: 'k' },
	{ sound: 'g', symbol: 'ᵹ' },
	{ sound: 'ʔ', symbol: 'ʯ' },
	{ sound: 'm', symbol: 'm' },
	// { sound: 'n', symbol: 'n' },
	{ sound: 'ɳ', symbol: 'ꞥ' },
	{ sound: 'ɲ', symbol: 'ñ' },
	{ sound: 'ʃ', symbol: 'ꝭ' },
	{ sound: 'c', symbol: 'ƙ' },
	{ sound: 'ʂ', symbol: 'ç' },
	{ sound: 'ɣ', symbol: 'ꭓ' },
	{ sound: 'ɣ', symbol: 'ỻ' },
	{ sound: 'j', symbol: 'ȝ' },
	{ sound: 'hʷ', symbol: 'Ɥ' },
	{ sound: 'ʍ', symbol: 'Ɥ' },
	{ sound: 'hʷi', symbol: 'ꝡ' },
	{ sound: 'ʍi', symbol: 'ꝡ' },
	{ sound: 'ɽ', symbol: 'ꝛ' },
	{ sound: 'a', symbol: 'a' },
	{ sound: 'aː', symbol: 'ä' },
	{ sound: 'e', symbol: 'e' },
	{ sound: 'eː', symbol: 'ë' },
	{ sound: 'i', symbol: 'i' },
	{ sound: 'iː', symbol: 'ï' },
	{ sound: 'o', symbol: 'o' },
	{ sound: 'oː', symbol: 'ö' },
	{ sound: 'u', symbol: 'u' },
	{ sound: 'uː', symbol: 'ü' },
	{ sound: 'ɯ', symbol: 'ʊ' },
];
