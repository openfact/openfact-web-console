import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKeysComponent } from './all-keys.component';

describe('AllKeysComponent', () => {
  let component: AllKeysComponent;
  let fixture: ComponentFixture<AllKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
