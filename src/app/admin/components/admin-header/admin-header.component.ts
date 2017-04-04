import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'of-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  title = 'Openfact';

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  get loggedIn() {
    return true;
  }

  logout() {
    window.location.replace('/');
  }

}
