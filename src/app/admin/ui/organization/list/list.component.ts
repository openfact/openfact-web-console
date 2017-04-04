import { Component, Input, OnInit } from '@angular/core';

import { Organizations } from './../../../../core/models/organization.model';

@Component({
  selector: 'openfact-organizations-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class OrganizationsListComponent implements OnInit {

  @Input() 
  organizations: Organizations;

  @Input() 
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
