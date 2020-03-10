import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPickerDialogComponent } from './object-picker-dialog.component';

describe('ObjectPickerDialogComponent', () => {
  let component: ObjectPickerDialogComponent;
  let fixture: ComponentFixture<ObjectPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectPickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
