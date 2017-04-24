import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SettingsToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: SettingsToolbarComponent;
  let fixture: ComponentFixture<SettingsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
