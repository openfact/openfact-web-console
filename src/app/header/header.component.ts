import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'of-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
