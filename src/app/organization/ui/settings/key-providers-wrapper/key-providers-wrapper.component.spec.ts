import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProvidersWrapperComponent } from './key-providers-wrapper.component';

describe('KeyProvidersWrapperComponent', () => {
  let component: KeyProvidersWrapperComponent;
  let fixture: ComponentFixture<KeyProvidersWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyProvidersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyProvidersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
