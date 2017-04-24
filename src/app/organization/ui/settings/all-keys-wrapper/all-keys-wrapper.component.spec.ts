import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsAllKeysWrapperComponent } from './all-keys-wrapper.component';

describe('AllKeysWrapperComponent', () => {
  let component: SettingsAllKeysWrapperComponent;
  let fixture: ComponentFixture<SettingsAllKeysWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAllKeysWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAllKeysWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
