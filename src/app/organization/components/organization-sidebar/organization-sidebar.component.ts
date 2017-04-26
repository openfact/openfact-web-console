import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { OrganizationScope } from './../../../core/services/organization.scope';
import { OrganizationStore } from './../../../core/store/organization.store';
import { Organizations } from './../../../core/models/organization.model';

@Component({
  selector: 'openfact-organization-sidebar',
  templateUrl: './organization-sidebar.component.html',
  styleUrls: ['./organization-sidebar.component.scss']
})
export class OrganizationSidebarComponent implements OnInit {

  currentOrganization: string;
  private readonly organizations: Observable<Organizations>;

  constructor(organizationScope: OrganizationScope, private organizationStore: OrganizationStore) {
    organizationScope.organization.subscribe((organization) => this.currentOrganization = organization);
    this.organizations = organizationStore.list;    
  }

  ngOnInit() {
    this.organizationStore.loadAll();
  }

}
