import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWrapperAttachedDocumentsComponent } from './view-wrapper-attached-documents.component';

describe('ViewWrapperAttachedDocumentsComponent', () => {
  let component: ViewWrapperAttachedDocumentsComponent;
  let fixture: ComponentFixture<ViewWrapperAttachedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWrapperAttachedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWrapperAttachedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
