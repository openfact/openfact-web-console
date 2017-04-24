import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsKeysWrapperComponent } from './keys-wrapper.component';

describe('KeysWrapperComponent', () => {
  let component: SettingsKeysWrapperComponent;
  let fixture: ComponentFixture<SettingsKeysWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeysWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeysWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
