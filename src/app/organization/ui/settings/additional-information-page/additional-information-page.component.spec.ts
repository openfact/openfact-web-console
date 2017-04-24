import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsAdditionalInformationPageComponent } from './additional-information-page.component';

describe('AdditionalInformationPageComponent', () => {
  let component: SettingsAdditionalInformationPageComponent;
  let fixture: ComponentFixture<SettingsAdditionalInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAdditionalInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAdditionalInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
