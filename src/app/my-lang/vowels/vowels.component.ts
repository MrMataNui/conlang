import { Component, OnInit } from '@angular/core';
import { SoundSymbols, VowelType, VowelTable } from './vowels.model';
@Component({
	selector: 'app-vowels',
	templateUrl: './vowels.component.html',
	styleUrls: ['./vowels.component.css']
})
export class VowelsComponent implements OnInit {
	constructor() { }
	vowelList: string[] = ['a aː', 'e eː', 'i iː', 'o oː', 'u uː', 'ɯ'];
	sounds: string[] = ['a', 'aː', 'e', 'eː', 'i', 'iː', 'o', 'oː', 'u', 'uː', 'ɯ'];
	symbols: string[] = ['a', 'ä', 'e', 'ë', 'i', 'ï', 'o', 'ö', 'u', 'ü', 'ʊ'];
	soundSymbols: SoundSymbols[] = [
		{ sound: 'a', symbol: 'a' },
		{ sound: 'e', symbol: 'e' },
		{ sound: 'i', symbol: 'i' },
		{ sound: 'o', symbol: 'o' },
		{ sound: 'u', symbol: 'u' },
		{ sound: 'aː', symbol: 'ä' },
		{ sound: 'eː', symbol: 'ë' },
		{ sound: 'iː', symbol: 'ï' },
		{ sound: 'oː', symbol: 'ö' },
		{ sound: 'uː', symbol: 'ü' },
		{ sound: 'ɯ', symbol: 'ʊ' },
	];
	vowelDefault: VowelType = {
		a1: '', a2: '',
		b1: '', b2: '',
		c1: '', c2: '',
		d1: '', d2: '',
		e1: '', e2: '',
		f1: '', f2: '',
		g1: '', g2: '',
		h1: '', h2: '',
		i1: '', i2: '',
		j1: '', j2: '',
		k1: '', k2: '',
		l1: '', l2: '',
		m1: '', m2: '',
		n1: '', n2: '',
		o1: '', o2: '',
		p1: '', p2: '',
		q1: '', q2: '',
		r1: '', r2: '',
		s1: '', s2: '',
		t1: '', t2: '',
		u1: '', u2: ''
	};
	getVowelGraph: VowelTable[] = [];
	/**
	 * Turns the vowel array into an object
	 * @param {string[]} langVowel
	 *						list of vowels for the conlang
	 * @returns VowelType
	 *						object for the vowels
	 */
	vowInit(langVowel: string[]): VowelType {
		const vowel: VowelType = this.vowelDefault;
		langVowel.forEach(vowelName => {
			switch (true) {
				case /i/.test(vowelName): vowel.a1 = vowelName; break;
				case /y/.test(vowelName): vowel.a2 = vowelName; break;
				case /ɨ/.test(vowelName): vowel.b1 = vowelName; break;
				case /ʉ/.test(vowelName): vowel.b2 = vowelName; break;
				case /ɯ/.test(vowelName): vowel.c1 = vowelName; break;
				case /u/.test(vowelName): vowel.c2 = vowelName; break;
				case /ɪ/.test(vowelName): vowel.d1 = vowelName; break;
				case /ʏ/.test(vowelName): vowel.d2 = vowelName; break;
				case /ɪ̈/.test(vowelName): vowel.e1 = vowelName; break;
				case /ʊ̈/.test(vowelName): vowel.e2 = vowelName; break;
				case /ɯ̽/.test(vowelName): vowel.f1 = vowelName; break;
				case /ʊ/.test(vowelName): vowel.f2 = vowelName; break;
				case /e/.test(vowelName): vowel.g1 = vowelName; break;
				case /ø/.test(vowelName): vowel.g2 = vowelName; break;
				case /ɘ/.test(vowelName): vowel.h1 = vowelName; break;
				case /ɵ/.test(vowelName): vowel.h2 = vowelName; break;
				case /ɤ/.test(vowelName): vowel.i1 = vowelName; break;
				case /o/.test(vowelName): vowel.i2 = vowelName; break;
				case /e̞/.test(vowelName): vowel.j1 = vowelName; break;
				case /ø̞/.test(vowelName): vowel.j2 = vowelName; break;
				case /ə/.test(vowelName): vowel.k1 = vowelName; break;
				case /ɵ̞/.test(vowelName): vowel.k2 = vowelName; break;
				case /ɤ̞/.test(vowelName): vowel.l1 = vowelName; break;
				case /o̞/.test(vowelName): vowel.l2 = vowelName; break;
				case /ɛ/.test(vowelName): vowel.m1 = vowelName; break;
				case /œ/.test(vowelName): vowel.m2 = vowelName; break;
				case /ɜ/.test(vowelName): vowel.n1 = vowelName; break;
				case /ɞ/.test(vowelName): vowel.n2 = vowelName; break;
				case /ʌ/.test(vowelName): vowel.o1 = vowelName; break;
				case /ɔ/.test(vowelName): vowel.o2 = vowelName; break;
				case /æ/.test(vowelName): vowel.p1 = vowelName; break;
				case /i/.test(vowelName): vowel.p2 = vowelName; break;
				case /ɐ/.test(vowelName): vowel.q1 = vowelName; break;
				case /ɞ̞/.test(vowelName): vowel.q2 = vowelName; break;
				case /a/.test(vowelName): vowel.s1 = vowelName; break;
				case /ɶ/.test(vowelName): vowel.s2 = vowelName; break;
				case /ä/.test(vowelName): vowel.t1 = vowelName; break;
				case /ɒ̈/.test(vowelName): vowel.t2 = vowelName; break;
				case /ɑ/.test(vowelName): vowel.u1 = vowelName; break;
				case /ɒ/.test(vowelName): vowel.u2 = vowelName; break;
			}
		});
		return vowel;
	}
	/**
	 * formats the grph for the conlang's vowels
	 * @param {string[]} langVowel
	 *						list of vowels for the conlang
	 * @returns VowelTable[]
	 *						list of the vowels and their styles and classes
	 */
	vowelGraph(langVowel: string[]): VowelTable[] {
		const vowel: VowelType = this.vowInit(langVowel);
		const topStyle: string[] = ['8px', '39px', '72px', '103px', '136px', '167px', '199px'];
		const highlight: Function = (vow1: string, vow2: string): string => (vow1 || vow2) ? 'vowel1' : 'vowel2';
		const midSpace: Function = (vow1: string, vow2: string): string => (
			(vow1 && vow2) ? `${vow1}&#160;•&#160;${vow2}`
				: (vow1) ? vow1
					: (vow2) ? vow2 : ''
		);
		return [
			{
				style: {
					top: topStyle[0],
					left: '38px'
				},
				class: highlight(vowel.a1, vowel.a2),
				row: midSpace(vowel.a1, vowel.a2)
			},
			{
				style: {
					top: topStyle[0],
					left: '163px'
				},
				class: highlight(vowel.b1, vowel.b2),
				row: midSpace(vowel.b1, vowel.b2)
			},
			{
				style: {
					top: topStyle[0],
					left: '285px'
				},
				class: highlight(vowel.c1, vowel.c2),
				row: midSpace(vowel.c1, vowel.c2)
			},
			{
				style: {
					top: topStyle[1],
					left: '120px'
				},
				class: highlight(vowel.d1, vowel.d2),
				row: midSpace(vowel.d1, vowel.d2)
			},
			{
				style: {
					top: topStyle[1],
					left: '175px'
				},
				class: highlight(vowel.e1, vowel.e2),
				row: midSpace(vowel.e1, vowel.e2)
			},
			{
				style: {
					top: topStyle[1],
					left: '230px'
				},
				class: highlight(vowel.f1, vowel.f2),
				row: midSpace(vowel.f1, vowel.f2)
			},
			{
				style: {
					top: topStyle[2],
					left: '74px'
				},
				class: highlight(vowel.g1, vowel.g2),
				row: midSpace(vowel.g1, vowel.g2)
			},
			{
				style: {
					top: topStyle[2],
					left: '181px'
				},
				class: highlight(vowel.h1, vowel.h2),
				row: midSpace(vowel.h1, vowel.h2)
			},
			{
				style: {
					top: topStyle[2],
					left: '285px'
				},
				class: highlight(vowel.i1, vowel.i2),
				row: midSpace(vowel.i1, vowel.i2)
			},
			{
				style: {
					top: topStyle[3],
					left: '95px'
				},
				class: highlight(vowel.j1, vowel.j2),
				row: midSpace(vowel.j1, vowel.j2)
			},
			{
				style: {
					top: topStyle[3],
					left: '197px'
				},
				class: highlight(vowel.k1, vowel.k2),
				row: midSpace(vowel.k1, vowel.k2)
			},
			{
				style: {
					top: topStyle[3],
					left: '285px'
				},
				class: highlight(vowel.l1, vowel.l2),
				row: midSpace(vowel.l1, vowel.l2)
			},
			{
				style: {
					top: topStyle[4],
					left: '119px'
				},
				class: highlight(vowel.m1, vowel.m2),
				row: midSpace(vowel.m1, vowel.m2)
			},
			{
				style: {
					top: topStyle[4],
					left: '202px'
				},
				class: highlight(vowel.o1, vowel.o2),
				row: midSpace(vowel.o1, vowel.o2)
			},
			{
				style: {
					top: topStyle[4],
					left: '285px'
				},
				class: highlight(vowel.p1, vowel.p2),
				row: midSpace(vowel.p1, vowel.p2)
			},
			{
				style: {
					top: topStyle[5],
					left: '133px'
				},
				class: highlight(vowel.q1, vowel.q2),
				row: midSpace(vowel.q1, vowel.q2)
			},
			{
				style: {
					top: topStyle[5],
					left: '212px'
				},
				class: highlight(vowel.r1, vowel.r2),
				row: midSpace(vowel.r1, vowel.r2)
			},
			{
				style: {
					top: topStyle[6],
					left: '160px'
				},
				class: highlight(vowel.s1, vowel.s2),
				row: midSpace(vowel.s1, vowel.s2)
			},
			{
				style: {
					top: topStyle[6],
					left: '223px'
				},
				class: highlight(vowel.t1, vowel.t2),
				row: midSpace(vowel.t1, vowel.t2)
			},
			{
				style: {
					top: topStyle[6],
					left: '286px'
				},
				class: highlight(vowel.u1, vowel.u2),
				row: midSpace(vowel.u1, vowel.u2)
			},
		];
	}
	ngOnInit() {
		this.getVowelGraph = this.vowelGraph(this.vowelList);
	}
}
