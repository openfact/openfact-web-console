import { Component, Input, OnInit } from '@angular/core';
import { Organization, Organizations } from './../../../../core/models/organization.model';

import { OrganizationStore } from './../../../../core/store/organization.store';
import { ToastyService } from 'ng2-toasty';

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

  constructor(
    private organizationStore: OrganizationStore,
    private toastyService: ToastyService) { }

  ngOnInit() {
  }

  delete(organization: Organization) {
    const resty: any = organization;
    this.organizationStore.delete(resty.one(organization.organization)).subscribe((data) => {
      this.toastyService.success('Success! The organization has been deleted.');
    });
  }

}
