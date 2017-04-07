import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserEditToolbarComponent } from './edit-toolbar.component';

describe('EditToolbarComponent', () => {
  let component: UserEditToolbarComponent;
  let fixture: ComponentFixture<UserEditToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
