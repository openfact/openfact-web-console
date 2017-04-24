import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsKeyProvidersPageComponent } from './key-providers-page.component';

describe('KeyProvidersPageComponent', () => {
  let component: SettingsKeyProvidersPageComponent;
  let fixture: ComponentFixture<SettingsKeyProvidersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeyProvidersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeyProvidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
