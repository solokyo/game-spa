import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearSelectorComponent } from './gear-selector.component';

describe('GearSelectorComponent', () => {
  let component: GearSelectorComponent;
  let fixture: ComponentFixture<GearSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
