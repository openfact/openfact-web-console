import { Component, OnInit } from '@angular/core';

import { User } from './../../../../../core/models/user.model';
import { UserService } from './../../../../../core/services/user.service';
import { UserStore } from './../../../../../core/store/user.store';

@Component({
  selector: 'openfact-delete-user-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class UserDeleteDialogComponent implements OnInit {

  user: User = new User();
  modal: any;

  constructor(private userService: UserService, private userStore: UserStore) { }

  ngOnInit() {
  }

  ok() {
    console.log('deleting user ' + this.user.username);
    this.modal.hide();
    this.userService.delete(this.user).subscribe(
      () => {
        this.userStore.loadAll();
      }
    );
  }

  close() {
    this.modal.hide();
  }

}
