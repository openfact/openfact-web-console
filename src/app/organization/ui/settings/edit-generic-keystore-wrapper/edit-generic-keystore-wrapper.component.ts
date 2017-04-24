import { Component, OnInit } from '@angular/core';

import { ComponentModel } from './../../../../core/models/component.model';
import { ComponentStore } from './../../../../core/store/component.store';
import { Observable } from 'rxjs/Observable';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfo } from './../../../../core/models/serverinfo.model';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { showStateTrigger } from './../../../../shared/animations/animations';

@Component({
  selector: 'openfact-settings-edit-generic-keystore-wrapper',
  templateUrl: './edit-generic-keystore-wrapper.component.html',
  styleUrls: ['./edit-generic-keystore-wrapper.component.scss'],
  animations: [showStateTrigger]
})
export class SettingsEditGenericKeystoreWrapperComponent implements OnInit {

  organization: Observable<Organization>;
  serverInfo: Observable<ServerInfo>;
  component: Observable<ComponentModel>;

  constructor(
    private organizationStore: OrganizationStore,
    private serverInfoStore: ServerInfoStore,
    private componentStore: ComponentStore) { }

  ngOnInit() {
    this.organization = this.organizationStore.resource;
    this.serverInfo = this.serverInfoStore.resource;
    this.component = this.componentStore.resource;
  }

}
