import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarMiscComponent } from './grammar-misc.component';

describe('GrammarMiscComponent', () => {
	let component: GrammarMiscComponent;
	let fixture: ComponentFixture<GrammarMiscComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GrammarMiscComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GrammarMiscComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
