import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsThemeWrapperComponent } from './theme-wrapper.component';

describe('ThemeWrapperComponent', () => {
  let component: SettingsThemeWrapperComponent;
  let fixture: ComponentFixture<SettingsThemeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsThemeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsThemeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
