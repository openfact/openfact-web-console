import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { Organizations } from './../../../../core/models/organization.model';

@Component({
  selector: 'openfact-organization-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class OrganizationsListPageComponent implements OnInit {

  private readonly organizations: Observable<Organizations>;
  private readonly loading: Observable<boolean>;

  showMode: string;

  constructor(private organizationStore: OrganizationStore) {
    this.organizations = this.organizationStore.list;
    this.loading = this.organizationStore.loading;
  }

  ngOnInit() {
    this.organizationStore.loadAll();
  }

  changeShowMode(showMode: string) {
    this.showMode = showMode;
  }

}
