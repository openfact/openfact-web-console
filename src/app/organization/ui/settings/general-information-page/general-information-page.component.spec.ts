import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInformationPageComponent } from './general-information-page.component';

describe('GeneralInformationPageComponent', () => {
  let component: GeneralInformationPageComponent;
  let fixture: ComponentFixture<GeneralInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
