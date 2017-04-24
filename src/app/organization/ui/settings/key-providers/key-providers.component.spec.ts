import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsKeyProvidersComponent } from './key-providers.component';

describe('KeyProvidersComponent', () => {
  let component: SettingsKeyProvidersComponent;
  let fixture: ComponentFixture<SettingsKeyProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeyProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeyProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
