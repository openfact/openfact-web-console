import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInformationWrapperComponent } from './additional-information-wrapper.component';

describe('AdditionalInformationWrapperComponent', () => {
  let component: AdditionalInformationWrapperComponent;
  let fixture: ComponentFixture<AdditionalInformationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInformationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInformationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
