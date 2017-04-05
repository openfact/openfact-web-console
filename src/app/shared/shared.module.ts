import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ng2-bootstrap';
import { ButtonCancelComponent } from './components/button-cancel/button-cancel.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ButtonResetComponent } from './components/button-reset/button-reset.component';
import { ButtonSaveComponent } from './components/button-save/button-save.component';
import { CommonModule } from '@angular/common';
import { FirstElementPipe } from './pipes/first-element.pipe';
import { FormFieldValidationMessagesComponent } from './components/form-field-validation-messages/form-field-validation-messages.component';
import { FormFieldValidationStateDirective } from './directives/form-field-validation-state.directive';
import { FormFieldsStatusComponent } from './components/form-fields-status/form-fields-status.component';
import { FormRequiredLabelDirective } from './directives/form-required-label.directive';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';
import { LimitedStringComponent } from './components/limited-string/limited-string.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ModalModule } from 'ngx-modal';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadFileComponent } from './components/read-file/read-file.component';
import { RestangularModule } from 'ng2-restangular';
import { RouterModule } from '@angular/router';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { ToNumberPipe } from './pipes/to-number.pipe';
import { ToastyModule } from 'ng2-toasty';
import { ViewKeyComponent } from './components/view-key/view-key.component';
import { ViewObjectComponent } from './components/view-object/view-object.component';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    BsDropdownModule,
    ModalModule,
    LocalStorageModule,
    ToastyModule,
  ],
  declarations: [
    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective,

    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    ButtonResetComponent,
    ReadFileComponent,
    ViewObjectComponent,
    ToArrayPipe,
    KeysPipe,
    ToDatePipe,
    YesNoPipe,
    ViewKeyComponent,
    FirstElementPipe,
    ToNumberPipe,
    LimitedStringComponent,

    LoadingComponent
  ],
  exports: [
    NgbModule,
    BsDropdownModule,
    LocalStorageModule,
    ToastyModule,

    FormFieldsStatusComponent,
    FormRequiredLabelDirective,
    FormFieldValidationMessagesComponent,
    FormFieldValidationStateDirective,

    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    ButtonResetComponent,
    ReadFileComponent,
    ViewObjectComponent,
    ToArrayPipe,
    KeysPipe,
    ToDatePipe,
    YesNoPipe,
    ViewKeyComponent,
    FirstElementPipe,
    ToNumberPipe,
    LimitedStringComponent,

    LoadingComponent
  ]
})
export class SharedModule { }
