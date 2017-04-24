import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsEditGenericKeystoreWrapperComponent } from './edit-generic-keystore-wrapper.component';

describe('EditGenericKeystoreWrapperComponent', () => {
  let component: SettingsEditGenericKeystoreWrapperComponent;
  let fixture: ComponentFixture<SettingsEditGenericKeystoreWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsEditGenericKeystoreWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEditGenericKeystoreWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
