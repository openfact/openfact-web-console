import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Key } from './../../../../core/models/key.model';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'openfact-organization-settings-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {

  private _organization: Organization;
  private _key: Key;

  form: FormGroup;
  working = false;

  @Input()
  set organization(organization: Organization) {
    this._organization = organization;
    this.loadData();
  }

  @Input()
  set key(key: Key) {
    this._key = key;
    this.loadData();
  }

  get key() {
    return this._key;
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

    });
  }

  loadData(): void {
    this.form.patchValue(this._organization);
  }

  save(form: FormControl) {
    this.working = true;

    let resource = form.value;
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
