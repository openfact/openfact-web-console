import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsAllKeysComponent } from './all-keys.component';

describe('AllKeysComponent', () => {
  let component: SettingsAllKeysComponent;
  let fixture: ComponentFixture<SettingsAllKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAllKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAllKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
