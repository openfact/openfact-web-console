import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsKeysPageComponent } from './keys-page.component';

describe('KeysPageComponent', () => {
  let component: SettingsKeysPageComponent;
  let fixture: ComponentFixture<SettingsKeysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeysPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
