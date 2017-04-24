import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsGeneralInformationPageComponent } from './general-information-page.component';

describe('GeneralInformationPageComponent', () => {
  let component: SettingsGeneralInformationPageComponent;
  let fixture: ComponentFixture<SettingsGeneralInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeneralInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
