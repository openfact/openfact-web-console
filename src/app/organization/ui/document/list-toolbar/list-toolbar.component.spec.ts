import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentsListToolbarComponent } from './list-toolbar.component';

describe('ListToolbarComponent', () => {
  let component: DocumentsListToolbarComponent;
  let fixture: ComponentFixture<DocumentsListToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsListToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
