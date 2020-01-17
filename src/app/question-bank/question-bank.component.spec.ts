import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankComponent } from './question-bank.component';
import { By } from "@angular/platform-browser";
describe('QuestionBankComponent', () => {
  let component: QuestionBankComponent;
  let fixture: ComponentFixture<QuestionBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('button'))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
