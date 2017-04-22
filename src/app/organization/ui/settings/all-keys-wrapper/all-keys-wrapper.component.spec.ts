import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKeysWrapperComponent } from './all-keys-wrapper.component';

describe('AllKeysWrapperComponent', () => {
  let component: AllKeysWrapperComponent;
  let fixture: ComponentFixture<AllKeysWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllKeysWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKeysWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
