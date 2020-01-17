import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyModeComponent } from './study-mode.component';

describe('StudyModeComponent', () => {
  let component: StudyModeComponent;
  let fixture: ComponentFixture<StudyModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
