import * as Collections from 'typescript-collections';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ComponentService } from './../../../../core/services/component.service';
import { Key } from './../../../../core/models/key.model';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

const type = 'org.openfact.keys.KeyProvider';

@Component({
  selector: 'openfact-settings-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class SettingsKeysComponent implements OnInit {

  private _organization: Organization;
  private _key: Key;

  active: any = {};
  activeMap = new Collections.Dictionary<String, any>();

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

  get organization() {
    return this._organization;
  }

  get key() {
    return this._key;
  }

  constructor(
    private componentService: ComponentService,
    private toastr: ToastsManager) {
  }

  ngOnInit() {
  }

  loadData(): void {
    if (!this.organization || !this.organization.id) {
      return;
    }
    if (!this.key || !this.key.keys) {
      return;
    }

    const queryParams = {
      type: type,
      parent: this.organization.id
    };

    this.componentService.list(queryParams).subscribe(
      (components) => {
        for (let i = 0; i < this.key.keys.length; i++) {
          for (let j = 0; j < components.length; j++) {
            if (this.key.keys[i].providerId === components[j].id) {
              this.key.keys[i].provider = components[j];
            }
          }
        }

        for (const t in this.key.active) {
          if (this.key.active[t]) {
            for (let i = 0; i < this.key.keys.length; i++) {
              if (this.key.active[t] === this.key.keys[i].kid) {
                this.active[t] = this.key.keys[i];
              }
            }
          }
        }

        this.activeMap = new Collections.Dictionary<String, any>();
        for (const key in this.active) {
          if (this.active[key]) {
            this.activeMap.setValue(key, this.active[key]);
          }
        }
      }
    );
  }

}
