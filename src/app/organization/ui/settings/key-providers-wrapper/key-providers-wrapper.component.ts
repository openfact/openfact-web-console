import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfo } from './../../../../core/models/serverinfo.model';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { showStateTrigger } from './../../../../shared/animations/animations';

@Component({
  selector: 'openfact-organization-settings-key-providers-wrapper',
  templateUrl: './key-providers-wrapper.component.html',
  styleUrls: ['./key-providers-wrapper.component.scss'],
  animations: [showStateTrigger]
})
export class SettingsKeyProvidersWrapperComponent implements OnInit {

  organization: Observable<Organization>;
  serverInfo: Observable<ServerInfo>;

  constructor(private organizationStore: OrganizationStore, private serverInfoStore: ServerInfoStore) { }

  ngOnInit() {
    this.organization = this.organizationStore.resource;
    this.serverInfo = this.serverInfoStore.resource;
  }

}
