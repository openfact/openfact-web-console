import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDeleteDialogComponent } from './component-delete-dialog.component';

describe('ComponentDeleteDialogComponent', () => {
  let component: ComponentDeleteDialogComponent;
  let fixture: ComponentFixture<ComponentDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
