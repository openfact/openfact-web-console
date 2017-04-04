import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'of-organization-create',
  templateUrl: './organization-create.component.html',
  styleUrls: ['./organization-create.component.scss']
})
export class OrganizationCreateComponent implements OnInit {

  form: FormGroup;
  working = false;

  organization: any;
  importing = false;
  
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      organization: [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [null, Validators.compose([Validators.maxLength(250)])],
    });
  }

  save(form: FormControl): void {
    /*this.working = true;
    const organizationCopy = Object.assign(this.organization || {}, form.value);

    this.dataService.organizations().create(organizationCopy).subscribe(
      result => {
        this.alertService.pop('success', 'Success', 'Success! The organization has been created.');
        this.router.navigate(['../']);
      },
      error => {
        this.working = false;
      }
    );*/
  }

  reset() {
    this.organization = null;
    this.importing = false;
    this.buildForm();
  }

  cancel() {
    this._router.navigate(['../']);
  }

}
