import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllablesComponent } from './syllables.component';

describe('SyllablesComponent', () => {
  let component: SyllablesComponent;
  let fixture: ComponentFixture<SyllablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
