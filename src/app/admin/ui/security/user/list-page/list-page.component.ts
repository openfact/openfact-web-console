import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UserService } from './../../../../../core/services/user.service';
import { UserStore } from './../../../../../core/store/user.store';
import { Users } from './../../../../../core/models/user.model';

@Component({
  selector: 'openfact-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class UsersListPageComponent implements OnInit {

  private readonly users: Observable<Users>;
  private readonly loading: Observable<boolean>;

  constructor(private userStore: UserStore) {
    this.users = this.userStore.list;
    this.loading = this.userStore.loading;
  }

  ngOnInit() {
    this.userStore.loadAll();
  }

}
