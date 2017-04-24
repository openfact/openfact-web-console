import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsCreateGenericKeystorePageComponent } from './create-generic-keystore-page.component';

describe('CreateGenericKeystorePageComponent', () => {
  let component: SettingsCreateGenericKeystorePageComponent;
  let fixture: ComponentFixture<SettingsCreateGenericKeystorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsCreateGenericKeystorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCreateGenericKeystorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
