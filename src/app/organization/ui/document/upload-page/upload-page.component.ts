import { Component, OnInit } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';

import { DocumentService } from './../../../../core/services/document.service';

@Component({
  selector: 'openfact-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class DocumentUploadPageComponent implements OnInit {

  uploader: FileUploader;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.uploader = this.documentService.fileUpload();
  }

  uploadAll() {
    this.documentService.uploadAll(this.uploader);
  }

}
