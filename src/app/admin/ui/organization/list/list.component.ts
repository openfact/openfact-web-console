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

  @Input()
  showMode = 'th-large';

  constructor(
    private organizationStore: OrganizationStore,
    private toastyService: ToastyService) { }

  ngOnInit() {

  }

  delete(resource: Organization) {
    const organization = this.organizationStore.navigateToOrganization(resource);
    this.organizationStore.delete(organization).subscribe((data) => {
      this.toastyService.success('Success! The organization has been deleted.');
    });
  }

}
