import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'openfact-button-delete',
  templateUrl: './button-delete.component.html'
})
export class ButtonDeleteComponent implements OnInit {

  @ViewChild('deleteModal')
  private modal: ModalDirective;

  // Resource Kind to delete (e.g., 'Organization' or 'Document').
  @Input()
  kind: string;

  // Optional display name for kind.
  @Input()
  typeDisplayName: string;

  // Optional display name of the resource to delete.
  @Input()
  displayName: string;

  // Name of the resource to delete.
  @Input()
  resourceName: string;

  // Set to true to disable the delete button.
  @Input()
  disableDelete = false;

  // Force the user to enter the name before we'll delete the resource (e.g. for projects).
  @Input()
  typeNameToConfirm = false;

  // Optional link label. Defaults to 'Delete'.
  @Input()
  label: string;

  // Only show a delete icon with no text.
  @Input()
  buttonOnly: boolean;

  // Optional callback when the delete succeeds
  @Output()
  onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirmName = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isOrganization(): boolean {
    if (this.kind === 'Organization') {
      return true;
    }
    return false;
  }

  delete(): void {
    if (this.disableDelete) {
      return;
    }
    this.modal.hide();
    this.onConfirm.emit(true);
  }

}
