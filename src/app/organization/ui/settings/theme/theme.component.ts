import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ServerInfo } from './../../../../core/models/serverinfo.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'openfact-organization-settings-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class SettingsThemeComponent implements OnInit {

  private _organization: Organization;
  private _serverInfo: ServerInfo;

  form: FormGroup;
  working = false;

  supportedLocales = ['en', 'es'];

  @Input()
  set organization(organization: Organization) {
    this._organization = organization;
    this.loadData();
  }

  @Input()
  set serverInfo(serverInfo: ServerInfo) {
    this._serverInfo = serverInfo;
    this.loadData();
  }

  get serverInfo() {
    return this._serverInfo;
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
      emailTheme: [''],
      reportTheme: [''],
      internationalizationEnabled: [false, Validators.compose([Validators.required])],
      supportedLocales: [],
      defaultLocale: ['en', Validators.compose([Validators.maxLength(3)])]
    });
  }

  loadData(): void {
    this.form.patchValue(this._organization);
  }

  refreshSupportedLocalesSelectValue(values: [any]) {
    this.form.patchValue({
      supportedLocales: values.map(f => f.id)
    });
  }

  save(form: FormControl) {
    this.working = true;

    let resource = form.value;
    this.organizationService.updateResource(this.organization, resource).subscribe(
      () => {
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
