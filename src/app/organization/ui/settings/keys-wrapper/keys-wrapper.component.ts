import { Component, OnInit } from '@angular/core';

import { Key } from './../../../../core/models/key.model';
import { KeysStore } from './../../../../core/store/key.store';
import { Observable } from 'rxjs';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';

@Component({
  selector: 'openfact-organization-settings-keys-wrapper',
  templateUrl: './keys-wrapper.component.html',
  styleUrls: ['./keys-wrapper.component.scss']
})
export class KeysWrapperComponent implements OnInit {

  organization: Observable<Organization>;
  key: Observable<Key>;

  constructor(private organizationStore: OrganizationStore, private keyStore: KeysStore) { }

  ngOnInit() {
    this.organization = this.organizationStore.resource;
    this.key = this.keyStore.resource;
  }

}
