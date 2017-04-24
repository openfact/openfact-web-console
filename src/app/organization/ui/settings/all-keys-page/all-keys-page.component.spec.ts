import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsAllKeysPageComponent } from './all-keys-page.component';

describe('AllKeysPageComponent', () => {
  let component: SettingsAllKeysPageComponent;
  let fixture: ComponentFixture<SettingsAllKeysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAllKeysPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAllKeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
