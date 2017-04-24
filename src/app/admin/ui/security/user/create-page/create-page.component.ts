import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Organization, Organizations } from './../../../../../core/models/organization.model';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OrganizationStore } from './../../../../../core/store/organization.store';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../../../../../core/models/user.model';
import { UserService } from './../../../../../core/services/user.service';

@Component({
  selector: 'openfact-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class UsersCreatePageComponent implements OnInit {

  form: FormGroup;
  working = false;

  user: User;

  private readonly organizations: Observable<Organizations>;

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

  buildForm() {
    this.form = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators.maxLength(120)])],
      enabled: [true],
      attributes: this.formBuilder.group({
        organization: [null, Validators.compose([])]
      }),
    });
  }

  save(form: FormControl) {
    this.working = true;

    this.userService.create(form.value).subscribe(
      () => {
        this.toastr.success('Success! The user has been created.');
        this.router.navigate(['../../'], { relativeTo: this.route });
      },
      (error) => {
        this.working = false;
      }
    );
  }

  cancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
