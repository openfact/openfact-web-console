import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'openfact-organization-settings-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

  _organization: Organization;

  @Input()
  set organization(organization: Organization) {
    this._organization = organization;
    /*if (organization) {
      this.loadData();
    }*/
  }

  form: FormGroup;
  working = false;

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private toastyService: ToastyService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      organization: [{ value: null, disabled: true }, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [null, Validators.compose([Validators.maxLength(250)])],
      enabled: [null, Validators.compose([Validators.required])],
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
