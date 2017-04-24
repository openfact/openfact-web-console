import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfo } from './../../../../core/models/serverinfo.model';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { showStateTrigger } from './../../../../shared/animations/animations';

@Component({
  selector: 'openfact-settings-create-generic-keystore-wrapper',
  templateUrl: './create-generic-keystore-wrapper.component.html',
  styleUrls: ['./create-generic-keystore-wrapper.component.scss'],
  animations: [showStateTrigger]
})
export class CreateGenericKeystoreWrapperComponent implements OnInit {

  organization: Observable<Organization>;
  serverInfo: Observable<ServerInfo>;

  constructor(private organizationStore: OrganizationStore, private serverInfoStore: ServerInfoStore) { }

  ngOnInit() {
    this.organization = this.organizationStore.resource;
    this.serverInfo = this.serverInfoStore.resource;
  }

}
