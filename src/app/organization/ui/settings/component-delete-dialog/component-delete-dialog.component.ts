import { Component, OnInit } from '@angular/core';

import { ComponentModel } from './../../../../core/models/component.model';
import { ComponentService } from './../../../../core/services/component.service';

@Component({
  selector: 'openfact-component-delete-dialog',
  templateUrl: './component-delete-dialog.component.html',
  styleUrls: ['./component-delete-dialog.component.scss']
})
export class ComponentDeleteDialogComponent implements OnInit {

  component: ComponentModel = new ComponentModel();
  modal: any;

  constructor(private componentService: ComponentService) {
  }

  ngOnInit() { }

  ok() {
    console.log('deleting component ' + this.component.id);
    this.modal.hide();

    this.componentService.delete(this.component).subscribe(
      () => {
        alert("reload");
      },
    );
  }

  close() {
    this.modal.hide();
  }

}
