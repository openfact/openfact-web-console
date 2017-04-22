import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProvidersComponent } from './key-providers.component';

describe('KeyProvidersComponent', () => {
  let component: KeyProvidersComponent;
  let fixture: ComponentFixture<KeyProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
