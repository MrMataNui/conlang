import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-lang',
	templateUrl: './my-lang.component.html',
	styleUrls: ['./my-lang.component.css']
})

export class MyLangComponent implements OnInit {
	constructor() { }
	brackets = (string: string): string => `<b>[ </b> ${string} <b> ]</b>`;
	langName = () => ({
		engSentence: this.brackets('<i>...and he stood holding his hat and turned his wet face to the wind...</i>'),
		sentence: this.brackets('...ƙä Ƕeꞗ Ƕᴀƙ ƙeʯëꞗ iku mäꞥ ƙä meȝïꞗ ʈo Ƕᴀƙ ƙuᵹäñ ꞥoꞗ ʈeꞥ...'),
		pronunciation: this.brackets('/caː hʷeb hʷac ceˈʔeːb iˈku maːɳ caː meˈjiːb ʈo hʷac cuˈgaːɲ ɳoꞗ ʈeɳ/'),
		wordOrder: this.brackets('...and he his hat holding stood and the wind to his wet face turned...'),
	})
	ngOnInit() { }
}
/*
	newTenseCheck(
		affixName: string,
		{ affix, affixIPA }: { affix: string; affixIPA: string; },
		{ name, nameIPA }: { name: string; nameIPA: string; }
	): string {
		('.*'), ('.*'),(\n\t+)('.*'), ('.*'),?
		{ affix: $1, affixIPA: $2 },$3{ name: $4, nameIPA: $5 }
*/
