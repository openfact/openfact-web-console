import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsEditGenericKeystorePageComponent } from './edit-generic-keystore-page.component';

describe('EditGenericKeystorePageComponent', () => {
  let component: SettingsEditGenericKeystorePageComponent;
  let fixture: ComponentFixture<SettingsEditGenericKeystorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsEditGenericKeystorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEditGenericKeystorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
