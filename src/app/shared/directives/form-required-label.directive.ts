import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[openfactFormRequiredLabel]'
})
export class FormRequiredLabelDirective implements OnInit {

  @Input()
  openfactFormRequiredLabel: FormControl;

  @HostBinding('class.required-pf')
  isRequired: boolean;

  constructor() { }

  ngOnInit() {
    const validator: any = this.openfactFormRequiredLabel.validator && this.openfactFormRequiredLabel.validator(new FormControl());
    this.isRequired = validator && validator.required;
  }

}
