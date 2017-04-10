import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentsListPageComponent } from './list-page.component';

describe('ListPageComponent', () => {
  let component: DocumentsListPageComponent;
  let fixture: ComponentFixture<DocumentsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
