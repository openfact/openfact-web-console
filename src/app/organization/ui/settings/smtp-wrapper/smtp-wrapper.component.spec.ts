import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpWrapperComponent } from './smtp-wrapper.component';

describe('SmtpWrapperComponent', () => {
  let component: SmtpWrapperComponent;
  let fixture: ComponentFixture<SmtpWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmtpWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
