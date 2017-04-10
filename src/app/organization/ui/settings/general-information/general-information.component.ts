import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { Subscription } from 'rxjs/Subscription';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'openfact-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

  organization: Organization;

  form: FormGroup;
  working = false;

  constructor(
    private formBuilder: FormBuilder,
    private organizationService: OrganizationService,
    private toastyService: ToastyService) { }

  ngOnInit() {
    this.buildForm();
    /*this.dataSubscription = this.route.data.subscribe(data => {
      this.organization = data['organization'];
      this.loadData();
    });*/
  }

  buildForm() {
    this.form = this.formBuilder.group({
      organization: [{ value: null, disabled: true }, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [null, Validators.compose([Validators.maxLength(250)])],
      enabled: [null, Validators.compose([Validators.required])],
    });
  }

  loadData(): void {
    this.form.patchValue(this.organization);
  }

  save(form: FormControl) {
    this.working = true;

    this.organizationService.updateResource(this.organization, form.value).subscribe(
      () => {
        this.working = false;
        this.form.markAsPristine();
        this.toastyService.success('Success! Organization has ben updated.')
      },
      () => {
        this.working = false;
      }
    );
  }

}
