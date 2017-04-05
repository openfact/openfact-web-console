import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastData, ToastOptions, ToastyConfig, ToastyService } from 'ng2-toasty';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Removable } from './../../model/removable';
import { Router } from '@angular/router';

@Component({
  selector: 'openfact-button-delete',
  templateUrl: './button-delete.component.html'
})
export class ButtonDeleteComponent implements OnInit {

  @ViewChild('deleteModal')
  private modal: any;

  // Object to be deleted
  @Input()
  object: Removable<any>;

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

  // Stay on the current page without redirecting to the resource list.
  @Input()
  stayOnCurrentPage = true;

  // Optional callback when the delete succeeds
  @Output()
  success: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Optional redirect URL when the delete succeeds
  @Input()
  redirectUrl: string;

  confirmName = '';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastyService: ToastyService
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

    this.object.delete().subscribe(
      (data) => {
        // callback
        this.success.emit(true);

        this.modal.close();
        this.toastyService.success('Success! The organization has been deleted.');

        // navigate
        if (!this.stayOnCurrentPage) {
          this.router.navigate([this.redirectUrl]);
        }
      }
    );
  }

}
