import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSendEventsComponent } from './view-send-events.component';

describe('ViewSendEventsComponent', () => {
  let component: ViewSendEventsComponent;
  let fixture: ComponentFixture<ViewSendEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSendEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSendEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
