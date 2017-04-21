import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'openfact-organization-settings-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.scss']
})
export class AdditionalInformationComponent implements OnInit {

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
      assignedIdentificationId: [undefined, Validators.compose([Validators.required, Validators.maxLength(20)])],
      additionalAccountId: [undefined, Validators.compose([Validators.required, Validators.maxLength(60)])],
      supplierName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      registrationName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      postalAddress: this.formBuilder.group({
        postalAddressId: [undefined, Validators.compose([Validators.required, Validators.maxLength(10)])],
        cityName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        citySubdivisionName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        countryIdentificationCode: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        countrySubentity: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        district: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
        streetName: [undefined, Validators.compose([Validators.required, Validators.maxLength(150)])],
      })
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
