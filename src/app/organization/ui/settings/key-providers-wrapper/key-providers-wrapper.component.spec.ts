import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsKeyProvidersWrapperComponent } from './key-providers-wrapper.component';

describe('KeyProvidersWrapperComponent', () => {
  let component: SettingsKeyProvidersWrapperComponent;
  let fixture: ComponentFixture<SettingsKeyProvidersWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsKeyProvidersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsKeyProvidersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
