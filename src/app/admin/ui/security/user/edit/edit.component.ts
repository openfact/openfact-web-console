import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import { OrganizationStore } from './../../../../../core/store/organization.store';
import { Organizations } from './../../../../../core/models/organization.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../../../../core/models/user.model';
import { UserService } from './../../../../../core/services/user.service';

@Component({
  selector: 'openfact-edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class UserEditComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  form: FormGroup;
  working = false;

  readonly organizations: Observable<Organizations>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager,
    private userService: UserService,
    private organizationStore: OrganizationStore) {
    this.organizations = this.organizationStore.list;
  }

  ngOnInit() {
    this.organizationStore.loadAll();
    this.buildForm();
  }

  ngOnChanges() {
    if (this.form && this.user.attributes) {
      this.form.get('attributes').patchValue({
        organization: this.user.attributes ? this.user.attributes['organization'] : null
      });
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      attributes: this.formBuilder.group({
        organization: [null, Validators.compose([])]
      })
    });
  }

  save() {
    this.userService.updateResource(this.user, this.form.value).subscribe(
      () => {
        this.toastr.success('Success! The user has been updated.');
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    );
  }

  cancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
