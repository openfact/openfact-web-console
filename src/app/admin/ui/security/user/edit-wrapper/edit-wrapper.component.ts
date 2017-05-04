import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { User } from './../../../../../core/models/user.model';
import { UserStore } from './../../../../../core/store/user.store';

@Component({
  selector: 'openfact-user-edit-wrapper',
  templateUrl: './edit-wrapper.component.html',
  styleUrls: ['./edit-wrapper.component.scss']
})
export class UserEditWrapperComponent implements OnInit {

  user: Observable<User>;

  constructor(private store: UserStore) { }

  ngOnInit() {
    this.user = this.store.resource;
  }

}
