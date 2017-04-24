import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsThemePageComponent } from './theme-page.component';

describe('ThemePageComponent', () => {
  let component: SettingsThemePageComponent;
  let fixture: ComponentFixture<SettingsThemePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsThemePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsThemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
