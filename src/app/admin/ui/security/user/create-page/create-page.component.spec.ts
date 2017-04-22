import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UsersCreatePageComponent } from './create-page.component';

describe('CreatePageComponent', () => {
  let component: UsersCreatePageComponent;
  let fixture: ComponentFixture<UsersCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
