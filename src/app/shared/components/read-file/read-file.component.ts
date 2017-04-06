import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'openfact-read-file',
  templateUrl: './read-file.component.html',
  styles: [`
    input[type=file] {
      display: none;
    }
  `]
})
export class ReadFileComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput: ElementRef;

  @Input()
  showFileName = false;

  @Input()
  clear: EventEmitter<boolean>;

  @Output()
  complete: EventEmitter<any> = new EventEmitter<any>();

  file: any = {
    fileName: undefined,
    data: undefined
  };

  constructor() { }

  ngOnInit() {
    if (this.clear) {
      this.clear.subscribe(event => {
        this.fileInput.nativeElement.value = '';
      });
    }
  }

  changeListener($event: any) {
    const inputValue = $event.target;
    const files: File = inputValue.files;

    const self = this;
    const reader: FileReader = new FileReader();

    this.file.fileName = files[0].name;
    reader.onloadend = function (e) {
      self.file.data = reader.result;
      self.complete.next(self.file);
    };
    reader.readAsText(files[0]);
  }

}
