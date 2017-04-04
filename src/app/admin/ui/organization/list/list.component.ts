import { Component, Input, OnInit } from '@angular/core';

import { Organization } from './../../../../core/models/organization.model';

@Component({
  selector: 'of-organizations-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class OrganizationsListComponent implements OnInit {

  @Input() 
  spaces: Organization;

  @Input() 
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
