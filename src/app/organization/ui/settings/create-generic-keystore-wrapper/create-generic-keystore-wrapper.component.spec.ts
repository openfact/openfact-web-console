import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenericKeystoreWrapperComponent } from './create-generic-keystore-wrapper.component';

describe('CreateGenericKeystoreWrapperComponent', () => {
  let component: CreateGenericKeystoreWrapperComponent;
  let fixture: ComponentFixture<CreateGenericKeystoreWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGenericKeystoreWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenericKeystoreWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
