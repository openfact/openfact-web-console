import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentUploadPageComponent } from './upload-page.component';

describe('UploadPageComponent', () => {
  let component: DocumentUploadPageComponent;
  let fixture: ComponentFixture<DocumentUploadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUploadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
