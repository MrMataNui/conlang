import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLangComponent } from './my-lang.component';

describe('MyLangComponent', () => {
  let component: MyLangComponent;
  let fixture: ComponentFixture<MyLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
