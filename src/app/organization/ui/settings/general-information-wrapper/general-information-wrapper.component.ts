import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { showStateTrigger } from './../../../../shared/animations/animations';

@Component({
  selector: 'openfact-settings-general-information-wrapper',
  templateUrl: './general-information-wrapper.component.html',
  styleUrls: ['./general-information-wrapper.component.scss'],
  animations: [showStateTrigger]
})
export class SettingsGeneralInformationWrapperComponent implements OnInit {

  organization: Observable<Organization>;

  constructor(private store: OrganizationStore) { }

  ngOnInit() {
    this.organization = this.store.resource;
  }

}
