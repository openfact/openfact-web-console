import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { AdditionalInformationPageComponent } from './additional-information-page/additional-information-page.component';
import { AdditionalInformationWrapperComponent } from './additional-information-wrapper/additional-information-wrapper.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../core/core.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { GeneralInformationPageComponent } from './general-information-page/general-information-page.component';
import { GeneralInformationWrapperComponent } from './general-information-wrapper/general-information-wrapper.component';
import { KeysComponent } from './keys/keys.component';
import { KeysPageComponent } from './keys-page/keys-page.component';
import { KeysWrapperComponent } from './keys-wrapper/keys-wrapper.component';
import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from './../../components/components.module';
import { SharedModule } from './../../../shared/shared.module';
import { SmtpComponent } from './smtp/smtp.component';
import { SmtpPageComponent } from './smtp-page/smtp-page.component';
import { SmtpWrapperComponent } from './smtp-wrapper/smtp-wrapper.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksWrapperComponent } from './tasks-wrapper/tasks-wrapper.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemePageComponent } from './theme-page/theme-page.component';
import { ThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
    { path: '', redirectTo: 'general-information', pathMatch: 'full' },
    { path: 'general-information', component: GeneralInformationPageComponent },
    { path: 'additional-information', component: AdditionalInformationPageComponent },
    { path: 'theme-settings', component: ThemePageComponent },
    { path: 'smtp-settings', component: SmtpPageComponent },
    { path: 'keys', component: KeysPageComponent },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        OrganizationComponentsModule,

        SharedModule,
        CoreModule
    ],
    declarations: [
        SmtpPageComponent,
        SmtpWrapperComponent,
        ToolbarComponent,
        SmtpComponent,
        GeneralInformationPageComponent,
        GeneralInformationWrapperComponent,
        GeneralInformationComponent,
        AdditionalInformationPageComponent,
        AdditionalInformationWrapperComponent,
        AdditionalInformationComponent,
        ThemeComponent,
        ThemePageComponent,
        ThemeWrapperComponent,
        TasksComponent,
        TasksPageComponent,
        TasksWrapperComponent,
        KeysPageComponent,
        KeysWrapperComponent,
        KeysComponent,
    ],
    entryComponents: [],
    exports: [

    ],
    providers: []
})
export class OrganizationSettingsModule {
}
