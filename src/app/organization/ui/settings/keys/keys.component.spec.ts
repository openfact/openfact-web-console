import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsKeysComponent } from './keys.component';

describe('KeysComponent', () => {
  let component: SettingsKeysComponent;
  let fixture: ComponentFixture<SettingsKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
