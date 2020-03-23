import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponAttributeSelectorComponent } from './weapon-attribute-selector.component';

describe('WeaponAttributeSelectorComponent', () => {
  let component: WeaponAttributeSelectorComponent;
  let fixture: ComponentFixture<WeaponAttributeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponAttributeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponAttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
