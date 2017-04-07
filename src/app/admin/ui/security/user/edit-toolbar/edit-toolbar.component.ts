import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from './../../../../../core/models/user.model';

@Component({
  selector: 'openfact-edit-user-toolbar',
  templateUrl: './edit-toolbar.component.html',
  styleUrls: ['./edit-toolbar.component.scss']
})
export class UserEditToolbarComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
