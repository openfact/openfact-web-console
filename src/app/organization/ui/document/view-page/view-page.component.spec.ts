import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentViewPageComponent } from './view-page.component';

describe('ViewPageComponent', () => {
  let component: DocumentViewPageComponent;
  let fixture: ComponentFixture<DocumentViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
