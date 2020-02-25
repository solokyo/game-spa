import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSelectorComponent } from './talent-selector.component';

describe('TalentSelectorComponent', () => {
  let component: TalentSelectorComponent;
  let fixture: ComponentFixture<TalentSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
