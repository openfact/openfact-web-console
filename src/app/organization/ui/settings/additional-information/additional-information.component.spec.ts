import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsAdditionalInformationComponent } from './additional-information.component';

describe('AdditionalInformationComponent', () => {
  let component: SettingsAdditionalInformationComponent;
  let fixture: ComponentFixture<SettingsAdditionalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAdditionalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAdditionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
