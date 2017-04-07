import { Component, Input, OnInit } from '@angular/core';
import { User, Users } from './../../../../../core/models/user.model';

import { Organization } from './../../../../../core/models/organization.model';
import { OrganizationService } from './../../../../../core/services/organization.service';
import { ToastyService } from 'ng2-toasty';
import { UserService } from './../../../../../core/services/user.service';

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
    private toastyService: ToastyService,
    private userService: UserService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
  }

  delete(user: User) {
    this.userService.delete(user);
  }

}
