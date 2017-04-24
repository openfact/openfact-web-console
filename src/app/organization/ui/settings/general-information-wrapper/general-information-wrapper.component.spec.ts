import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsGeneralInformationWrapperComponent } from './general-information-wrapper.component';

describe('GeneralInformationWrapperComponent', () => {
  let component: SettingsGeneralInformationWrapperComponent;
  let fixture: ComponentFixture<SettingsGeneralInformationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeneralInformationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralInformationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
