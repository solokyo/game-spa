import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearModSelectorComponent } from './gear-mod-selector.component';

describe('GearModSelectorComponent', () => {
  let component: GearModSelectorComponent;
  let fixture: ComponentFixture<GearModSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearModSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearModSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
