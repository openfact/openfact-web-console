import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'of-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Openfact';

  constructor(private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

}
