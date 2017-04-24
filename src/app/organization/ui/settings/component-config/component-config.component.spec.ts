import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsComponentConfigComponent } from './component-config.component';

describe('ComponentConfigComponent', () => {
  let component: SettingsComponentConfigComponent;
  let fixture: ComponentFixture<SettingsComponentConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponentConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
