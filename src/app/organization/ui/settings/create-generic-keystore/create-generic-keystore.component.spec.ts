import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenericKeystoreComponent } from './create-generic-keystore.component';

describe('CreateGenericKeystoreComponent', () => {
  let component: CreateGenericKeystoreComponent;
  let fixture: ComponentFixture<CreateGenericKeystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGenericKeystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenericKeystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
