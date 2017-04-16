import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'openfact-document-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input()
  document: Document;

  constructor() { }

  ngOnInit() {
  }

}
