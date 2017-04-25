import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ComponentStore } from './../../../../core/store/component.store';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-settings-edit-generic-keystore-page',
  templateUrl: './edit-generic-keystore-page.component.html',
  styleUrls: ['./edit-generic-keystore-page.component.scss']
})
export class SettingsEditGenericKeystorePageComponent implements OnInit {

  private idOrganizationSubscription: Subscription;
  private idComponentSubscription: Subscription;

  constructor(
    organizationStore: OrganizationStore,
    componentStore: ComponentStore,
    serverInfoStore: ServerInfoStore,
    route: ActivatedRoute) {
    this.idOrganizationSubscription = route.parent.parent.params.pluck<Params, string>('organization')
      .map((id) => organizationStore.load(id))
      .subscribe();
    this.idComponentSubscription = route.params.pluck<Params, string>('component')
      .map((id) => componentStore.load(id))
      .subscribe();
    serverInfoStore.load();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.idOrganizationSubscription.unsubscribe();
    this.idComponentSubscription.unsubscribe();
  }

}
