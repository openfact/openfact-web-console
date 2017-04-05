import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { OrganizationStore } from './../../../../core/store/organization.store';
import { Organizations } from './../../../../core/models/organization.model';

@Component({
  selector: 'openfact-organizations-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class OrganizationsListToolbarComponent implements OnInit {

  @Input()
  organizations: Organizations;

  @Output()
  onChangeShowMode: EventEmitter<string> = new EventEmitter<string>();

  showMode = 'th-large';

  constructor(private organizationStore: OrganizationStore) { }

  ngOnInit() {
  }

  search() {
    this.organizationStore.loadAll();
  }

  setShowMode(showMode: string) {
    this.showMode = showMode;
    this.onChangeShowMode.emit(this.showMode);
  }

}
