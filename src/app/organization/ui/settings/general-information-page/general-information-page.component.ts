import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { OrganizationStore } from './../../../../core/store/organization.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'openfact-settings-general-information-page',
  templateUrl: './general-information-page.component.html',
  styleUrls: ['./general-information-page.component.scss']
})
export class SettingsGeneralInformationPageComponent implements OnInit, OnDestroy {

  private idSubscription: Subscription;

  constructor(store: OrganizationStore, route: ActivatedRoute) {
    this.idSubscription = route.parent.parent.params.pluck<Params, string>('organization')
      .map((id) => store.load(id))
      .subscribe();
  }

  ngOnInit() {

  }

  ngOnDestroy() { this.idSubscription.unsubscribe(); }

}
