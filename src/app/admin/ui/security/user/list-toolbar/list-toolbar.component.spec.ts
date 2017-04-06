import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UsersListToolbarComponent } from './list-toolbar.component';

describe('ListToolbarComponent', () => {
  let component: UsersListToolbarComponent;
  let fixture: ComponentFixture<UsersListToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
