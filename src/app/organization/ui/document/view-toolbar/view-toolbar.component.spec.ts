import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentViewToolbarComponent } from './view-toolbar.component';

describe('ViewToolbarComponent', () => {
  let component: DocumentViewToolbarComponent;
  let fixture: ComponentFixture<DocumentViewToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentViewToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
