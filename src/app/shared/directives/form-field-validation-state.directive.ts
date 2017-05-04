import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Directive({
  selector: '[openfact-form-field-validation-state]'
})
export class FormFieldValidationStateDirective implements OnInit {

  @Input()
  openfactFormFieldValidationState: FormControl;

  @HostBinding('class.has-error')
  hasError: boolean;

  constructor() { }

  ngOnInit() {
    this.openfactFormFieldValidationState.statusChanges.subscribe(controlValue => {
      if (this.openfactFormFieldValidationState.valid || this.openfactFormFieldValidationState.disabled) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    });
  }

}
