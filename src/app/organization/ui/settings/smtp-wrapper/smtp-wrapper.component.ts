import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';

@Component({
  selector: 'openfact-organization-settings-smtp-wrapper',
  templateUrl: './smtp-wrapper.component.html',
  styleUrls: ['./smtp-wrapper.component.scss']
})
export class SmtpWrapperComponent implements OnInit {

  organization: Observable<Organization>;

  constructor(private store: OrganizationStore) { }

  ngOnInit() {
    this.organization = this.store.resource;
  }

}