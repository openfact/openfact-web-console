import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysWrapperComponent } from './keys-wrapper.component';

describe('KeysWrapperComponent', () => {
  let component: KeysWrapperComponent;
  let fixture: ComponentFixture<KeysWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
