import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentViewWrapperSendEventsComponent } from './view-wrapper-send-events.component';

describe('ViewWrapperSendEventsComponent', () => {
  let component: DocumentViewWrapperSendEventsComponent;
  let fixture: ComponentFixture<DocumentViewWrapperSendEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentViewWrapperSendEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewWrapperSendEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
