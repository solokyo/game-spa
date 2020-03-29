import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearAttributeSelectorComponent } from './gear-attribute-selector.component';

describe('GearAttributeSelectorComponent', () => {
  let component: GearAttributeSelectorComponent;
  let fixture: ComponentFixture<GearAttributeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearAttributeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearAttributeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
