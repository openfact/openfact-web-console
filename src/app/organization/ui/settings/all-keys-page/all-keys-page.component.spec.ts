import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKeysPageComponent } from './all-keys-page.component';

describe('AllKeysPageComponent', () => {
  let component: AllKeysPageComponent;
  let fixture: ComponentFixture<AllKeysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllKeysPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
