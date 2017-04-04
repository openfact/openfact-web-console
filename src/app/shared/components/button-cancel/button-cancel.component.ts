import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'of-button-cancel',
  templateUrl: './button-cancel.component.html'
})
export class ButtonCancelComponent implements OnInit {

  @Output()
  ofOnCancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.ofOnCancel.emit(true);
  }

}
