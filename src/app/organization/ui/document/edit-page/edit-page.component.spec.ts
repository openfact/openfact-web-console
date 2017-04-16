import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentEditPageComponent } from './edit-page.component';

describe('EditPageComponent', () => {
  let component: DocumentEditPageComponent;
  let fixture: ComponentFixture<DocumentEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
