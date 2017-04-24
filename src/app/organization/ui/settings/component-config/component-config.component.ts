import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'openfact-settings-component-config',
  templateUrl: './component-config.component.html',
  styleUrls: ['./component-config.component.scss']
})
export class SettingsComponentConfigComponent implements OnInit {

  @Input()
  config: any;

  @Input()
  properties: any;

  constructor() { }

  ngOnInit() { }

  onSwitchChange(option, $event) {
    this.config[option.name][0] = $event;
  }

  onFileChange(option, $event) {
    this.config[option.name][0] = $event.data;
  }

  onListChange(option, $event) {
    this.config[option.name][0] = $event;
  }

}
