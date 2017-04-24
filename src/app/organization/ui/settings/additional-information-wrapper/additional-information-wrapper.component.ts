import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { showStateTrigger } from './../../../../shared/animations/animations';

@Component({
  selector: 'openfact-settings-additional-information-wrapper',
  templateUrl: './additional-information-wrapper.component.html',
  styleUrls: ['./additional-information-wrapper.component.scss'],
  animations: [showStateTrigger]
})
export class SettingsAdditionalInformationWrapperComponent implements OnInit {

  organization: Observable<Organization>;

  constructor(private store: OrganizationStore) { }

  ngOnInit() {
    this.organization = this.store.resource;
  }

}
