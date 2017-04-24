import { Component, Input, OnInit } from '@angular/core';

import { Organization } from './../../../../core/models/organization.model';

@Component({
  selector: 'openfact-organization-settings-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class SettingsToolbarComponent implements OnInit {

  @Input()
  organization: Organization;

  constructor() { }

  ngOnInit() {
  }

}
