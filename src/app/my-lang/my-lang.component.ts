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
		sentence: this.brackets('...ƙä ɥep ɥaƙ ƙeʯëp iku mäꞥ ƙä meȝïp ʈo ɥaƙ ƙuᵹäñ ꞥob ʈeꞥ...'),
		pronunciation: this.brackets('/caː hʷep hʷac ceˈʔeːp iˈku maːɳ caː meˈjiːp ʈo hʷac cuˈgaːɲ ɳob ʈeɳ/'),
		wordOrder: this.brackets('...and he his hat holding stood and the wind to his wet face turned...'),
	})
	ngOnInit() { }
}
