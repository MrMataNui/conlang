import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyLangComponent } from './my-lang/my-lang.component';

import { TranslatorComponent } from './my-lang/translator/translator.component';
import { ConsonantsComponent } from './my-lang/consonants/consonants.component';
import { VowelsComponent } from './my-lang/vowels/vowels.component';
import { SyllablesComponent } from './my-lang/syllables/syllables.component';
import { GrammarComponent } from './my-lang/grammar/grammar.component';
import { ArticlesComponent } from './my-lang/grammar/articles/articles.component';
import { MorphologyComponent } from './my-lang/grammar/morphology/morphology.component';
import { GrammarMiscComponent } from './my-lang/grammar/grammar-misc/grammar-misc.component';
import { LexiconComponent } from './my-lang/lexicon/lexicon.component';
import { EvolveComponent } from './my-lang/evolve/evolve.component';
import { DataComponent } from './my-lang/data/data.component';

const appRoutes: Routes = [
	{ path: 'translate', component: TranslatorComponent },
	{ path: 'consonants', component: ConsonantsComponent },
	{ path: 'vowels', component: VowelsComponent },
	{ path: 'syllables', component: SyllablesComponent },
	{ path: 'grammar', component: GrammarComponent },
	{ path: 'articles', component: ArticlesComponent },
	{ path: 'morphology', component: MorphologyComponent },
	{ path: 'grammar-misc', component: GrammarMiscComponent },
	{ path: 'lexicon', component: LexiconComponent },
	{ path: 'evolve', component: EvolveComponent },
	{ path: 'data', component: DataComponent },
	{ path: '', redirectTo: '/translate', pathMatch: 'full' },
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		AppComponent,
		MyLangComponent,
		LexiconComponent,
		SyllablesComponent,
		VowelsComponent,
		ConsonantsComponent,
		GrammarComponent,
		EvolveComponent,
		TranslatorComponent,
		MorphologyComponent,
		ArticlesComponent,
		GrammarMiscComponent,
		DataComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
