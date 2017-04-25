import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-settings-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss']
})
export class SettingsThemePageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(
    organizationStore: OrganizationStore,
    serverInfoStore: ServerInfoStore,
    route: ActivatedRoute) {
    this.idSubscription = route.parent.parent.params.pluck<Params, string>('organization')
      .map((id) => organizationStore.load(id))
      .subscribe();
    serverInfoStore.load();
  }

  ngOnInit() { }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
