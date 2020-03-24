import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearPickerDialogComponent } from './gear-picker-dialog.component';

describe('GearPickerDialogComponent', () => {
  let component: GearPickerDialogComponent;
  let fixture: ComponentFixture<GearPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearPickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
