import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserStore } from './../../../../../core/store/user.store';
import { Users } from './../../../../../core/models/user.model';

@Component({
  selector: 'openfact-users-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class UsersListToolbarComponent implements OnInit {

  @Input()
  users: Users;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userStorage: UserStore) { }

  ngOnInit() {
  }

  search() {
    this.userStorage.loadAll();
  }

  createUser() {
    this.router.navigate(['./', 'users', 'create'], { relativeTo: this.route });
  }

}
