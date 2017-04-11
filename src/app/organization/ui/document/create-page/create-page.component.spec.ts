import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentCreatePageComponent } from './create-page.component';

describe('CreatePageComponent', () => {
  let component: DocumentCreatePageComponent;
  let fixture: ComponentFixture<DocumentCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
