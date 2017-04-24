import * as Collections from 'typescript-collections';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ComponentService } from './../../../../core/services/component.service';
import { Key } from './../../../../core/models/key.model';
import { Organization } from './../../../../core/models/organization.model';
import { OrganizationService } from './../../../../core/services/organization.service';
import { ToastyService } from 'ng2-toasty';

const type = 'org.openfact.keys.KeyProvider';

@Component({
  selector: 'openfact-organization-settings-keys',
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

  constructor(
    private componentService: ComponentService,
    private toastyService: ToastyService) {
  }

  ngOnInit() {
  }

  loadData(): void {
    if (!this._organization || !this._organization.id) {
      return;
    }
    if (!this._key || !this._key.keys) {
      return;
    }

    const queryParams = {
      type: type,
      parent: this._organization.id
    };

    this.componentService.list(null, queryParams).subscribe(
      (components) => {
        for (let i = 0; i < this._key.keys.length; i++) {
          for (let j = 0; j < components.length; j++) {
            if (this._key.keys[i].providerId === components[j].id) {
              this._key.keys[i].provider = components[j];
            }
          }
        }

        for (const t in this._key.active) {
          if (this._key.active[t]) {
            for (let i = 0; i < this._key.keys.length; i++) {
              if (this._key.active[t] === this._key.keys[i].kid) {
                this.active[t] = this._key.keys[i];
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
