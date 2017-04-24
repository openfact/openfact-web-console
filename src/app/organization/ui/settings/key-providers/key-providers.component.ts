import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ComponentDeleteDialogComponent } from './../component-delete-dialog/component-delete-dialog.component';
import { ComponentService } from './../../../../core/services/component.service';
import { Organization } from './../../../../core/models/organization.model';
import { ServerInfo } from './../../../../core/models/serverinfo.model';

@Component({
  selector: 'openfact-organization-settings-key-providers',
  templateUrl: './key-providers.component.html',
  styleUrls: ['./key-providers.component.scss']
})
export class SettingsKeyProvidersComponent implements OnInit {

  private _organization: Organization;
  private _serverInfo: ServerInfo;

  providers: any;
  instances: any;

  @ViewChild(ComponentDeleteDialogComponent)
  deleteDialog: ComponentDeleteDialogComponent;

  @Input()
  set organization(organization: Organization) {
    this._organization = organization;
    this.loadData();
  }

  @Input()
  set serverInfo(serverInfo: ServerInfo) {
    this._serverInfo = serverInfo;
    if (this._serverInfo && this._serverInfo.componentTypes) {
      this.providers = this._serverInfo.componentTypes['org.openfact.keys.KeyProvider'];
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private componentService: ComponentService) {
  }

  ngOnInit() {
  }

  loadData() {
    if (!this._organization || !this._organization.id) {
      return;
    }

    const queryParams = {
      type: 'org.openfact.keys.KeyProvider',
      parent: this._organization.id
    };

    this.componentService.list(null, queryParams).subscribe(
      (components) => {
        this.instances = components;
      }
    );
  }

  addProvider(provider) {
    this.router.navigate(['./', provider], { relativeTo: this.route });
  };

  openDeleteDialog(deleteComponentModal, component) { 
    this.deleteDialog.modal = deleteComponentModal;
    this.deleteDialog.component = component;
    deleteComponentModal.show();
  }  

}
