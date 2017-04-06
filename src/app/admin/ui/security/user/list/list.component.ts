import { Component, Input, OnInit } from '@angular/core';
import { User, Users } from './../../../../../core/models/user.model';

import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'openfact-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  users: Users;

  @Input()
  loading: boolean;

  constructor(
    private toastyService: ToastyService) { }

  ngOnInit() {
  }

  delete(resource: User) {

  }

}
