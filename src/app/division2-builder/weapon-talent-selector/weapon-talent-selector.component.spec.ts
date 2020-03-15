import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponTalentSelectorComponent } from './weapon-talent-selector.component';

describe('WeaponTalentSelectorComponent', () => {
  let component: WeaponTalentSelectorComponent;
  let fixture: ComponentFixture<WeaponTalentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponTalentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponTalentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
