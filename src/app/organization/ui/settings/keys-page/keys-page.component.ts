import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { KeysStore } from './../../../../core/store/key.store';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-settings-keys-page',
  templateUrl: './keys-page.component.html',
  styleUrls: ['./keys-page.component.scss']
})
export class SettingsKeysPageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(
    organizationStore: OrganizationStore,
    keyStore: KeysStore,
    route: ActivatedRoute) {
    this.idSubscription = route.parent.parent.params.pluck<Params, string>('organization')
      .map((id) => organizationStore.load(id))
      .subscribe();
    keyStore.load();
  }

  ngOnInit() { }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
