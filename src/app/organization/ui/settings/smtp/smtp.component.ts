import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'openfact-settings-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SettingsSmtpComponent implements OnInit {

  private _organization: Organization;

  form: FormGroup;
  working = false;

  @Input()
  set organization(organization: Organization) {
    this._organization = organization;
    if (this._organization && this._organization.smtpServer) {
      this.loadData();
    }
  }

  get organization() {
    return this._organization;
  }

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private toastr: ToastsManager) {
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
    this.form.patchValue(this.organization.smtpServer);
  }

  save(form: FormControl) {
    this.working = true;

    let resource = { smtpServer: form.value };
    this.organizationService.updateResource(this.organization, resource).subscribe(
      () => {
        console.log("entro");

        this.working = false;
        this.form.markAsPristine();
        this.toastr.success('Success! Your changes have been saved to the organization.');
      },
      (error) => {
        this.working = false;
      }
    );
  }

}
