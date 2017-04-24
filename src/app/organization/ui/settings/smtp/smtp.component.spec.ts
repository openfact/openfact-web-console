import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsSmtpComponent } from './smtp.component';

describe('SmtpComponent', () => {
  let component: SettingsSmtpComponent;
  let fixture: ComponentFixture<SettingsSmtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSmtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSmtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
