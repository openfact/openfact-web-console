import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsSmtpWrapperComponent } from './smtp-wrapper.component';

describe('SmtpWrapperComponent', () => {
  let component: SettingsSmtpWrapperComponent;
  let fixture: ComponentFixture<SettingsSmtpWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSmtpWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSmtpWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
