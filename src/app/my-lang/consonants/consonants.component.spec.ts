import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsonantsComponent } from './consonants.component';

describe('ConsonantsComponent', () => {
  let component: ConsonantsComponent;
  let fixture: ComponentFixture<ConsonantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsonantsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsonantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  // soundSymbols: SoundSymbols[] = [
  //   { sound: 'p', symbol: 'p' },
  //   { sound: 'b', symbol: 'b' },
  //   { sound: 't', symbol: 'ꝷ' },
  //   { sound: 'd', symbol: 'd' },
  //   { sound: 'ʈ', symbol: 'ꝷ' },
  //   { sound: 'k', symbol: 'k' },
  //   { sound: 'g', symbol: 'ƣ' },
  //   { sound: 'ʔ', symbol: 'ꝝ' },
  //   { sound: 'm', symbol: 'm' },
  //   { sound: 'n', symbol: 'ꞃ' },
  //   { sound: 'ɳ', symbol: 'ɳ' },
  //   { sound: 'ɲ', symbol: 'ɲ' },
  //   { sound: 'ʧ', symbol: 'ɥ' },
  //   { sound: 'ʤ', symbol: 'ꝯ' },
  //   { sound: 'ʂ', symbol: 'ꝭ' },
  //   { sound: 'h', symbol: 'h' },
  //   { sound: 'j', symbol: 'ꝩ' },
  //   { sound: 'ɽ', symbol: 'ʀ' },
  //   { sound: 'ɭ', symbol: 'ỻ' },
  // ];
