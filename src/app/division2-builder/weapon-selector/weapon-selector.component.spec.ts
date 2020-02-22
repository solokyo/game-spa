import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSelectorComponent } from './weapon-selector.component';

describe('WeaponSelectorComponent', () => {
  let component: WeaponSelectorComponent;
  let fixture: ComponentFixture<WeaponSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
