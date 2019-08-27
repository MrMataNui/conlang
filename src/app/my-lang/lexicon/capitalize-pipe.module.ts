import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent }	 from '../../app.component';

@NgModule({
	imports:					[ BrowserModule ],
	exports:					[ CapitalizePipe ],
	declarations:		[ CapitalizePipe ],
	// declarations:		[ AppComponent, CapitalizePipe ],
	// bootstrap:				[ AppComponent ]
})

export class MainPipe {}
