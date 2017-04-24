import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsGeneralInformationComponent } from './general-information.component';

describe('GeneralInformationComponent', () => {
  let component: SettingsGeneralInformationComponent;
  let fixture: ComponentFixture<SettingsGeneralInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsGeneralInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
