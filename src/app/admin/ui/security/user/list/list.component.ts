import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { User, Users } from './../../../../../core/models/user.model';

import { ActivatedRoute } from '@angular/router';
import { Organization } from './../../../../../core/models/organization.model';
import { OrganizationService } from './../../../../../core/services/organization.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserDeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
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

  @ViewChild(UserDeleteDialogComponent)
  deleteDialog: UserDeleteDialogComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastsManager,
    private userService: UserService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
  }

  edit(user: User) {
    this.router.navigate(['./users', user.id], { relativeTo: this.route });
  }

  openDeleteDialog(deleteUserModal, user) {
    this.deleteDialog.modal = deleteUserModal;
    this.deleteDialog.user = user;
    deleteUserModal.show();
  }

}
