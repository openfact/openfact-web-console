import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { OrganizationService } from './../../../../core/services/organization.service';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'openfact-organization-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class OrganizationsCreatePageComponent implements OnInit {

  form: FormGroup;
  working = false;

  organization: any;
  importing = false;

  clearFileInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private toastr: ToastsManager,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      organization: [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      description: [null, Validators.compose([Validators.maxLength(250)])],
    });
  }

  importFile(file) {
    this.organization = Object.assign({}, JSON.parse(file.data));
    this.form.patchValue(this.organization);
    this.importing = true;
  }

  save(form: FormControl) {
    this.working = true;
    const organizationCopy = Object.assign(this.organization || {}, form.value);

    this.organizationService.create(organizationCopy).subscribe(
      result => {
        this.toastr.success('Success! The organization has been created.');
        this._router.navigate(['../']);
      },
      error => {
        this.working = false;
      }
    );
  }

  reset() {
    this.organization = null;
    this.importing = false;
    this.clearFileInput.emit(true);
    this.buildForm();
  }

  cancel() {
    this._router.navigate(['../']);
  }

}
