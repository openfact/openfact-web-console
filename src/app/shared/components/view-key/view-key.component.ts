import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'openfact-view-key',
  templateUrl: './view-key.component.html'
})
export class ViewKeyComponent implements OnInit {

  @Input()
  key: any;

  @Input()
  label: string;

  @Input()
  isSpan: boolean;

  @Input()
  isButton: boolean;

  @Input()
  isLink: boolean;

  @Input()
  disableOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
