import { Component, Input, OnInit } from '@angular/core';

import { Organization } from './../../../../core/models/organization.model';

@Component({
  selector: 'openfact-organization-settings-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

  @Input()
  organization: Organization;

  constructor() { }

  ngOnInit() {
  }

}
