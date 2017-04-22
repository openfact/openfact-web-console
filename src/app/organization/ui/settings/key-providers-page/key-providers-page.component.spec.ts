import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProvidersPageComponent } from './key-providers-page.component';

describe('KeyProvidersPageComponent', () => {
  let component: KeyProvidersPageComponent;
  let fixture: ComponentFixture<KeyProvidersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyProvidersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyProvidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
