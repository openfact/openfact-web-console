import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsAdditionalInformationWrapperComponent } from './additional-information-wrapper.component';

describe('AdditionalInformationWrapperComponent', () => {
  let component: SettingsAdditionalInformationWrapperComponent;
  let fixture: ComponentFixture<SettingsAdditionalInformationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAdditionalInformationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAdditionalInformationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
