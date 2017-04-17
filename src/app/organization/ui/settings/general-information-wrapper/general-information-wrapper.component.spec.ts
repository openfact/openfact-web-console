import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationWrapperComponent } from './general-information-wrapper.component';

describe('GeneralInformationWrapperComponent', () => {
  let component: GeneralInformationWrapperComponent;
  let fixture: ComponentFixture<GeneralInformationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInformationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInformationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
