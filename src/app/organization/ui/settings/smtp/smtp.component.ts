import { Component, Input, OnInit } from '@angular/core';

import { Organization } from './../../../../core/models/organization.model';

@Component({
  selector: 'openfact-organization-settings-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent implements OnInit {

  @Input()
  organization: Organization;

  constructor() { }

  ngOnInit() {
  }

}
