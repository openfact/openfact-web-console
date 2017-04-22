import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserEditPageComponent } from './edit-page.component';

describe('EditPageComponent', () => {
  let component: UserEditPageComponent;
  let fixture: ComponentFixture<UserEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
