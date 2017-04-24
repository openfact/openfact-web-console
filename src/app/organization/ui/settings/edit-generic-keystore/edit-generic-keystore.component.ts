import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ComponentService } from './../../../../core/services/component.service';
import { Organization } from './../../../../core/models/organization.model';
import { Router } from '@angular/router';
import { ServerInfo } from './../../../../core/models/serverinfo.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'openfact-settings-edit-generic-keystore',
  templateUrl: './edit-generic-keystore.component.html',
  styleUrls: ['./edit-generic-keystore.component.scss']
})
export class SettingsEditGenericKeystoreComponent implements OnInit {

  private _organization: Organization;
  private _serverInfo: ServerInfo;
  private _instance: any;

  form: FormGroup;
  working = false;

  providerFactory: any;

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

  @Input()
  set instance(instance: any) {
    this._instance = instance;
    this.loadData();
  }

  get organization() {
    return this._organization;
  }

  get serverInfo() {
    return this._serverInfo;
  }

  get isntance() {
    return this._instance;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager,
    private componentService: ComponentService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.maxLength(60)])],
      parentId: [null, Validators.maxLength(250)],
      providerId: [null, Validators.maxLength(250)],
      providerType: [null, Validators.maxLength(250)]
    });
  }

  loadData() {
    if (!this.organization || !this.organization.organization) {
      return;
    }
    if (!this.serverInfo || !this.serverInfo.componentTypes) {
      return;
    }
    if (!this.instance || !this.instance.config) {
      return;
    }

    const providerId = this.route.snapshot.params['provider'];

    const providers = this.serverInfo.componentTypes['org.openfact.keys.KeyProvider'];
    let providerFactory = null;
    for (let i = 0; i < providers.length; i++) {
      const p = providers[i];
      if (p.id === providerId) {
        this.providerFactory = p;
        providerFactory = p;
        break;
      }
    }

    if (providerFactory.properties) {
      for (let i = 0; i < providerFactory.properties.length; i++) {
        const configProperty = providerFactory.properties[i];
        if (!this.instance.config[configProperty.name]) {
          if (configProperty.defaultValue) {
            this.instance.config[configProperty.name] = [configProperty.defaultValue];
          } else {
            this.instance.config[configProperty.name] = [''];
          }
        }
      }
    }

    // 
    this.form.patchValue({
      name: this.instance.name,
      parentId: this.instance.parentId,
      providerId: this.instance.providerId,
      providerType: this.instance.providerType
    });
  }

  save(config: any) {
    this.working = true;

    this.componentService.update(Object.assign(this.form.value, { config: config })).subscribe(
      result => {
        this.toastr.success('Success! The component has been updated.');
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error => {
        this.working = false;
      }
    );
  }

  cancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
