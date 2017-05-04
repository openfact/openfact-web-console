import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfo } from './../../../../core/models/serverinfo.model';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { showStateTrigger } from './../../../../shared/animations/animations';

@Component({
  selector: 'openfact-settings-theme-wrapper',
  templateUrl: './theme-wrapper.component.html',
  styleUrls: ['./theme-wrapper.component.scss'],
  animations: [showStateTrigger]
})
export class SettingsThemeWrapperComponent implements OnInit {

  organization: Observable<Organization>;
  serverInfo: Observable<ServerInfo>;

  constructor(private organizationStore: OrganizationStore, private serverInfoStore: ServerInfoStore) { }

  ngOnInit() {
    this.organization = this.organizationStore.resource;
    this.serverInfo = this.serverInfoStore.resource;
  }

}
