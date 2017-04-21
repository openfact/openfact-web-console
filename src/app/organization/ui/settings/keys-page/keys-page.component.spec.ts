import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysPageComponent } from './keys-page.component';

describe('KeysPageComponent', () => {
  let component: KeysPageComponent;
  let fixture: ComponentFixture<KeysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
