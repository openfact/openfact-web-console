import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';

@Component({
  selector: 'openfact-organization-settings-general-information-wrapper',
  templateUrl: './general-information-wrapper.component.html',
  styleUrls: ['./general-information-wrapper.component.scss']
})
export class GeneralInformationWrapperComponent implements OnInit {

  organization: Observable<Organization>;

  constructor(private store: OrganizationStore) { }

  ngOnInit() {
    this.organization = this.store.resource;
  }

}