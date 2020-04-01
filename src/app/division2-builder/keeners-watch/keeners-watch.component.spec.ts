import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeenersWatchComponent } from './keeners-watch.component';

describe('KeenersWatchComponent', () => {
  let component: KeenersWatchComponent;
  let fixture: ComponentFixture<KeenersWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeenersWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeenersWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
