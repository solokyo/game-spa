import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Division2BuilderComponent } from './division2-builder.component';

describe('Division2BuilderComponent', () => {
  let component: Division2BuilderComponent;
  let fixture: ComponentFixture<Division2BuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Division2BuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Division2BuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
