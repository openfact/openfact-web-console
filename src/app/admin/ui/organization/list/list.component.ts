import { Component, Input, OnInit } from '@angular/core';
import { Organization, Organizations } from './../../../../core/models/organization.model';

import { OrganizationStore } from './../../../../core/store/organization.store';
import { Router } from '@angular/router';
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
    private router: Router,
    private organizationStore: OrganizationStore,
    private toastyService: ToastyService) { }

  ngOnInit() {

  }

  edit(organization: Organization) {
    this.router.navigate(['/organizations', organization.organization]);
  }

  delete(resource: Organization) {
    const organization = this.organizationStore.navigateToOrganization(resource);
    this.organizationStore.delete(organization).subscribe((data) => {
      this.toastyService.success('Success! The organization has been deleted.');
      this.organizationStore.loadAll();
    });
  }

}
