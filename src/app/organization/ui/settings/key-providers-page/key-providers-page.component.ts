import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { OrganizationStore } from './../../../../core/store/organization.store';
import { ServerInfoStore } from './../../../../core/store/serverinfo.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-key-providers-page',
  templateUrl: './key-providers-page.component.html',
  styleUrls: ['./key-providers-page.component.scss']
})
export class SettingsKeyProvidersPageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(
    organizationStore: OrganizationStore,
    serverInfoStore: ServerInfoStore,
    route: ActivatedRoute) {
    this.idSubscription = route.parent.parent.params.pluck<Params, string>('organization')
      .map((id) => organizationStore.load(id))
      .subscribe();
    serverInfoStore.emptyLoad();
  }

  ngOnInit() {

  }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
