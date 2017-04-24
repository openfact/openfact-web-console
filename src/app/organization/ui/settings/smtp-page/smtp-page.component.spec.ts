import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SetttingsSmtpPageComponent } from './smtp-page.component';

describe('SmtpPageComponent', () => {
  let component: SetttingsSmtpPageComponent;
  let fixture: ComponentFixture<SetttingsSmtpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetttingsSmtpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetttingsSmtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
