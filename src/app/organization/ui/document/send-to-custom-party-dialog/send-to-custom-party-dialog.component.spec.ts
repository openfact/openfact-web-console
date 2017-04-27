import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentSendToCustomPartyDialogComponent } from './send-to-custom-party-dialog.component';

describe('SendToCustomPartyDialogComponent', () => {
  let component: DocumentSendToCustomPartyDialogComponent;
  let fixture: ComponentFixture<DocumentSendToCustomPartyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSendToCustomPartyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSendToCustomPartyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
