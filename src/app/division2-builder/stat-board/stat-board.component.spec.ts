import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBoardComponent } from './stat-board.component';

describe('StatBoardComponent', () => {
  let component: StatBoardComponent;
  let fixture: ComponentFixture<StatBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
