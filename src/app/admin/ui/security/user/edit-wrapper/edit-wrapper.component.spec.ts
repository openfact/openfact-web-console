import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserEditWrapperComponent } from './edit-wrapper.component';

describe('EditWrapperComponent', () => {
  let component: UserEditWrapperComponent;
  let fixture: ComponentFixture<UserEditWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
