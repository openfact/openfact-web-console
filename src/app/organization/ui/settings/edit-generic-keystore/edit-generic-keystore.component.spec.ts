import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsEditGenericKeystoreComponent } from './edit-generic-keystore.component';

describe('EditGenericKeystoreComponent', () => {
  let component: SettingsEditGenericKeystoreComponent;
  let fixture: ComponentFixture<SettingsEditGenericKeystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsEditGenericKeystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEditGenericKeystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
