import { Component, OnInit } from '@angular/core';
import { PhonRules } from './syllables.model';

@Component({
	selector: 'app-syllables',
	templateUrl: './syllables.component.html',
	styleUrls: ['./syllables.component.css']
})

export class SyllablesComponent implements OnInit {
	constructor() { }
	syll = {
		syll: '(C)V(C)',
		stress: 'Second — stress is on the second syllable',
		wordStart: 'b, d, c, g, hʷ, j, k, m, p, t, ʃ, ɖ, ɣ, ɲ, ɳ, ʂ, ʈ, ʍ',
		wordMid: 'b, d, dj, c, g, j, jk, k, kp, m, mj, mp, ʃ, ɖ, ɣ, ɲ, ɳ, ɽ, ʂ, ʈ, ʔ',
		wordFinal: 'b, d, c, g, j, m, p, t, ɖ, ɣ, ɳ, ʂ'
	};
	newData: PhonRules[];
	data: string[] = [
		'Guide to phonological rules: <b>"e → i / _g"</b> means ‘e’ turns into ‘i’ before a ‘g’.',
		'C = consonant',
		'V = vowel',
		'S = stop',
		'N = nasal consonant',
		'F = fricative',
		'K = velar',
		'L = lateral',
		'R = resonant/sonorant',
		'P = labial/bilabial',
		'E = front vowel',
		'B = back vowel',
		'# = word boundary',
		'Ø = null/nothing'
	];
	rules: string[] = [
		'a → aː / _C#',
		'a → i / _Ci',
		't → ɾ / _a',
		't → s / #_i',
		'ɲ → ɳ / _#',
	];
	ngOnInit() {
		this.newData = this.data
			.map((dataVar: string, i: number): PhonRules => ({
				data: dataVar,
				rules: (this.rules[i]) ? this.rules[i] : '',
			}));
	}
}
