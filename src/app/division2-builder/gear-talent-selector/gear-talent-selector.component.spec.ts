import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearTalentSelectorComponent } from './gear-talent-selector.component';

describe('GearTalentSelectorComponent', () => {
  let component: GearTalentSelectorComponent;
  let fixture: ComponentFixture<GearTalentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearTalentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearTalentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
