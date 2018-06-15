// \{\n[ ]+([\w,\n ]+)\n\}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLangComponent } from './my-lang/my-lang.component';
import { LexiconComponent } from './my-lang/lexicon/lexicon.component';
import { SyllablesComponent } from './my-lang/syllables/syllables.component';
import { VowelsComponent } from './my-lang/vowels/vowels.component';
import { ConsonantsComponent } from './my-lang/consonants/consonants.component';
import { GrammarComponent } from './my-lang/grammar/grammar.component';
import { EvolveComponent } from './my-lang/evolve/evolve.component';
import { TranslatorComponent } from './my-lang/translator/translator.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLangComponent,
    LexiconComponent,
    SyllablesComponent,
    VowelsComponent,
    ConsonantsComponent,
    GrammarComponent,
    EvolveComponent,
    TranslatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
