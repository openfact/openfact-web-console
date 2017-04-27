import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttachedDocumentsComponent } from './view-attached-documents.component';

describe('ViewAttachedDocumentsComponent', () => {
  let component: ViewAttachedDocumentsComponent;
  let fixture: ComponentFixture<ViewAttachedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttachedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttachedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
