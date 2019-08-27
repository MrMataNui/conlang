/*
	ʧ ʤ
	ʃ ʒ
*/
import { Component, OnInit } from '@angular/core';
import {
	SoundSymbols,
	FullConsonantTable,
	FullConsonantTable2,
	MannerDefaults,
	MannerDefaults2,
	FullRegEx
} from './consonants.model';

@Component({
	selector: 'app-consonants',
	templateUrl: './consonants.component.html',
	styleUrls: ['./consonants.component.css']
})

export class ConsonantsComponent implements OnInit {
	constructor() { }
	consonantTable = {};
	mannerDefaults: MannerDefaults = {
		Nasal: '',
		Stop: '',
		Affricate: '',
		Fricative: '',
		Approximant: '',
		Tap: '',
		Trill: '',
		LatFric: '',
		LatApprox: '',
		LatTap: '',
		Implosive: '',
		Click: ''
	};
	consonants: FullConsonantTable = {
		Dental: this.mannerDefaults,
		Bilabial: this.mannerDefaults,
		Labiodental: this.mannerDefaults,
		Alveolar: this.mannerDefaults,
		Postalveolar: this.mannerDefaults,
		Retroflex: this.mannerDefaults,
		AlveoPalatal: this.mannerDefaults,
		Palatal: this.mannerDefaults,
		Velar: this.mannerDefaults,
		LabioVelar: this.mannerDefaults,
		Uvular: this.mannerDefaults,
		Pharyngeal: this.mannerDefaults,
		Glottal: this.mannerDefaults
	};
	regExTest: FullRegEx = {
		Dental: {
			Nasal: [''],
			Stop: [''],
			Affricate: [''],
			Fricative: ['θ', 'ð'],
			Approximant: [''],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['ǀ']
		},
		Bilabial: {
			Nasal: ['m'],
			Stop: ['p', 'b'],
			Affricate: ['pɸ', 'bβ'],
			Fricative: ['ɸ', 'β'],
			Approximant: [''],
			Tap: [''],
			Trill: ['ʙ'],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: ['ɓ'],
			Click: ['ʘ']
		},
		Labiodental: {
			Nasal: ['ɱ'],
			Stop: [''],
			Affricate: [''],
			Fricative: ['f', 'v'],
			Approximant: ['ʋ'],
			Tap: ['ⱱ'],
			Trill: [''],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['']
		},
		Alveolar: {
			Nasal: ['n'],
			Stop: ['t', 'd'],
			Affricate: ['ʦ', 'ʣ'],
			Fricative: ['s', 'z'],
			Approximant: ['ɹ'],
			Tap: ['ɾ'],
			Trill: ['r'],
			LatFric: ['ɬ', 'ɮ'],
			LatApprox: ['ɫ', 'l'],
			LatTap: ['ɺ'],
			Implosive: ['ɗ'],
			Click: ['ǁ']
		},
		Postalveolar: {
			Nasal: [''],
			Stop: [''],
			Affricate: ['ʧ', 'ʤ'],
			Fricative: ['ʃ', 'ʒ'],
			Approximant: [''],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['ǃ']
		},
		Retroflex: {
			Nasal: ['ɳ'],
			Stop: ['ʈ', 'ɖ'],
			Affricate: [''],
			Fricative: ['ʂ', 'ʐ'],
			Approximant: ['ɻ'],
			Tap: ['ɽ'],
			Trill: [''],
			LatFric: [''],
			LatApprox: ['ɭ'],
			LatTap: [''],
			Implosive: [''],
			Click: ['']
		},
		AlveoPalatal: {
			Nasal: [''],
			Stop: [''],
			Affricate: ['ʨ', 'ʥ'],
			Fricative: ['ɕ', 'ʑ'],
			Approximant: [''],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['']
		},
		Palatal: {
			Nasal: ['ɲ'],
			Stop: ['c', 'ɟ'],
			Affricate: [''],
			Fricative: ['ç', 'ʝ'],
			Approximant: ['j'],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: ['ʎ'],
			LatTap: [''],
			Implosive: ['ʄ'],
			Click: ['ǂ']
		},
		Velar: {
			Nasal: ['ŋ'],
			Stop: ['k', 'g'],
			Affricate: ['kx', 'gɣ'],
			Fricative: ['x', 'ɣ'],
			Approximant: ['ɰ'],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: ['ʟ'],
			LatTap: [''],
			Implosive: ['ɠ'],
			Click: ['']
		},
		LabioVelar: {
			Nasal: [''],
			Stop: [''],
			Affricate: [''],
			Fricative: [''],
			Approximant: ['ʍ', 'w'],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['']
		},
		Uvular: {
			Nasal: ['ɴ'],
			Stop: ['q', 'ɢ'],
			Affricate: ['qχ', 'ɢʁ'],
			Fricative: ['χ', 'ʁ'],
			Approximant: [''],
			Tap: [''],
			Trill: ['ʀ'],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: ['ʛ'],
			Click: ['']
		},
		Pharyngeal: {
			Nasal: [''],
			Stop: ['ʡ'],
			Affricate: ['ʡʢ'],
			Fricative: ['ħ'],
			Approximant: ['ʕ'],
			Tap: [''],
			Trill: ['ʜ', 'ʢ'],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['']
		},
		Glottal: {
			Nasal: [''],
			Stop: ['ʔ'],
			Affricate: ['ʔh'],
			Fricative: ['h', 'ɦ'],
			Approximant: [''],
			Tap: [''],
			Trill: [''],
			LatFric: [''],
			LatApprox: [''],
			LatTap: [''],
			Implosive: [''],
			Click: ['']
		}
	};
	placeList: string[] = Object.keys(this.consonants);
	mannerList: string[] = Object.keys(this.mannerDefaults);

	constList: string[] = ['m', 'ɳ', 'ɲ', 'b', 'ʈ ɖ', 'g', 'ʔ', 'ʃ', 'c', 'ʂ', 'x', 'hʷ', 'j', 'ʍ', 'ɽ'];
	soundSymbols: SoundSymbols[] = [
		{ sound: 'm', symbol: 'm' },
		{ sound: 'ɳ', symbol: 'ꞥ' },
		{ sound: 'ɲ', symbol: 'ñ' },
		{ sound: 'b', symbol: 'b' },
		{ sound: 'ʈ', symbol: 'ʈ' },
		{ sound: 'ɖ', symbol: 'd' },
		{ sound: 'g', symbol: 'ᵹ' },
		{ sound: 'ʔ', symbol: 'ʯ' },
		{ sound: 'ʃ', symbol: 'ꝭ' },
		{ sound: 'c', symbol: 'ƙ' },
		{ sound: 'ʂ', symbol: 'ç' },
		{ sound: 'x', symbol: 'ỻ' },
		{ sound: 'x', symbol: 'ꭓ' },
		{ sound: 'hʷ', symbol: 'ɥ' },
		{ sound: 'hʷi', symbol: 'ꝡ' },
		{ sound: 'j', symbol: 'ȝ' },
		{ sound: 'ʍ', symbol: 'ɥ' },
		{ sound: 'ʍi', symbol: 'ꝡ' },
		{ sound: 'ɽ', symbol: 'ꝛ' },
	];

	/**
	 * checks the place value
	 *	to see if it needs to be replaced
	 * @param	{string} val - the name of the place to check against
	 * @returns {string}
	 */
	placeListNames(val: string): string {
		switch (val) {
			case 'AlveoPalatal': return 'Alveolo-Palatal';
			case 'LabioVelar': return 'Labio-Velar';
			default: return val;
		}
	}

	/**
	 * checks the manner value
	 *	to see if it needs to be replaced
	 * @param	{string} val - the name of the manner to check against
	 * @returns {string}
	 */
	mannerListNames(val: string): string {
		switch (val) {
			case 'LatFric': return 'Lateral Fricative';
			case 'LatApprox': return 'Lateral Approximant';
			case 'LatTap': return 'Lateral Tap';
			default: return val;
		}
	}

	/**
	 * turns an array into an object
	 * @param	{any[]} getArray - the array to become an object
	 * @param	{any} mannerNames - if not called from mannerObject, false; otherwise, the list of manner names
	 * @returns {object}
	 */
	arrayToObject(getArray: any[], mannerNames: any): FullConsonantTable2 {
		const isEmpty = (obj): boolean => (Object.keys(obj).length === 0);
		const index: object = {};
		if (mannerNames) {
			const Key1: string = Object.keys(getArray[0])[0];
			index[Key1] = {};
			const emptyBlock = '';
			for (const i in getArray) {
				const Val2 = Object.values(getArray[i])[0];
				const Key2: string = (isEmpty(Val2)) ? mannerNames[i] : Object.keys(Val2)[0];
				index[Key1][Key2] = (isEmpty(Val2)) ? emptyBlock : Object.values(Val2)[0];
				const alveolarNasal = (`${Key1}, ${Key2}` !== 'Alveolar, Nasal');
				const checkForN = (index[Key1][Key2] === 'n');
				if (alveolarNasal && checkForN) {
					index[Key1][Key2] = emptyBlock;
				}
			}
		} else {
			for (const i in getArray) {
				const Key = Object.keys(getArray[i])[0];
				const Val = Object.values(getArray[i])[0];
				if (Val !== '') {
					index[Key] = Val;
				}
			}
		}
		return index;
	}

	/**
	 * RegEx checker
	 * @param	{string} RegEx - RegEx to parse
	 * @param	{string} constName - constanant to parse
	 * @returns {string}
	 */
	regEx(RegEx: string, constName: string): string {
		return (new RegExp(RegEx).test(constName)) ? constName : '';
	}

	/**
	 * Determines which RegEx parameters
	 *	the current place/manner would need
	 * @param	{string} place - the place to check against
	 * @param	{string} manner - the manner to check against
	 * @returns {string}
	 */
	getRegEx(place: string, manner: string): string {
		const regExVar: string[] = this.regExTest[place][manner];
		const checkRegEx: string = (regExVar[0][1]) ? regExVar[0] : `[${regExVar[0]}]`;
		return (regExVar[1]) ? regExVar.join('|') : checkRegEx;
	}

	/**
	 * Initializes 'this.consonantTable'
	 *	with the conlang's consonants
	 * @param	{string[]} langConst - the list of the conlang's consonants
	 * @returns {FullConsonantTable2}
	 */
	constInit(langConst: string[]): FullConsonantTable2 {
		const consonantDefaults: FullConsonantTable = this.consonants;
		const placeObject: FullConsonantTable2[] = Object.keys(consonantDefaults).map(place => {
			const mannerObject: MannerDefaults2[] = Object.keys(consonantDefaults[place]).map(manner => {
				const langObject: MannerDefaults2[] = langConst.map(constName => {
					const regExTest: string = this.regEx(
						this.getRegEx(place, manner),
						constName
					);
					const mannerName: MannerDefaults2 = {};
					mannerName[manner] = regExTest;
					return mannerName;
				});
				const placeName: MannerDefaults2 = {};
				placeName[place] = this.arrayToObject(
					langObject, false
				);
				return placeName;
			});
			return this.arrayToObject(
				mannerObject,
				this.mannerList
			);
		});
		return this.arrayToObject(
			placeObject, false
		);
	}

	ngOnInit() {
		const iCheck = (letter: SoundSymbols): string => {
			return (letter.sound.indexOf('i') < 0) ? letter.sound : '';
		};
		let constList2: string[] = this.soundSymbols
			.map(iCheck).filter(el => el);
		constList2 = [...new Set(constList2)];
		// console.log('constList2', constList2);
		this.consonantTable = this.constInit(this.constList);
	}
}
