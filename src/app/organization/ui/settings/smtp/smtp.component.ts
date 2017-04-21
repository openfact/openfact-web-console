import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'openfact-organization-settings-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent implements OnInit {

  private _organization: Organization;

  form: FormGroup;
  working = false;

  @Input()
  set organization(organization: Organization) {
    this._organization = organization;
    this.loadData();
  }

  get organization() {
    return this._organization;
  }

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private toastyService: ToastyService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      host: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      port: [undefined, Validators.compose([Validators.maxLength(20)])],
      from: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      ssl: [false, Validators.compose([Validators.required])],
      starttls: [false, Validators.compose([Validators.required])],
      auth: [false],
      user: [undefined, Validators.compose([Validators.maxLength(150)])],
      password: [undefined, Validators.compose([Validators.maxLength(150)])]
    });
  }

  loadData(): void {
    if (this._organization && this._organization.smtpServer) {
      this.form.patchValue(this._organization.smtpServer);
    }
  }

  save(form: FormControl) {
    this.working = true;

    let resource = { smtpServer: form.value };
    this.organizationService.updateResource(this.organization, resource).subscribe(
      () => {
        this.working = false;
        this.form.markAsPristine();
        this.toastyService.success('Success! Your changes have been saved to the organization.');
      },
      (error) => {
        this.working = false;
      }
    );
  }

}
