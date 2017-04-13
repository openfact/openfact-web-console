import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'openfact-documents-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class ListToolbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  createDocument() {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

  uploadDocument() {
    this.router.navigate(['./upload'], { relativeTo: this.route });
  }

}
