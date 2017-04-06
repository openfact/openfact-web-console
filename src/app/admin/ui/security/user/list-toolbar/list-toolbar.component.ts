import { Component, Input, OnInit } from '@angular/core';

import { Users } from './../../../../../core/models/user.model';

@Component({
  selector: 'openfact-users-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class UsersListToolbarComponent implements OnInit {

  @Input()
  users: Users;

  constructor() { }

  ngOnInit() {
  }

}
