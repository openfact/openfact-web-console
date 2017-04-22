import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DocumentViewWrapperComponent } from './view-wrapper.component';

describe('ViewWrapperComponent', () => {
  let component: DocumentViewWrapperComponent;
  let fixture: ComponentFixture<DocumentViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentViewWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
