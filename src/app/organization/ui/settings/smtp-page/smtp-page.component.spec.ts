import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpPageComponent } from './smtp-page.component';

describe('SmtpPageComponent', () => {
  let component: SmtpPageComponent;
  let fixture: ComponentFixture<SmtpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmtpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
