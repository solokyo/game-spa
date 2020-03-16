import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponModSelectorComponent } from './weapon-mod-selector.component';

describe('WeaponModSelectorComponent', () => {
  let component: WeaponModSelectorComponent;
  let fixture: ComponentFixture<WeaponModSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponModSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponModSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
