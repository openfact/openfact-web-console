import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ComponentDeleteDialogComponent } from './component-delete-dialog/component-delete-dialog.component';
import { CoreModule } from './../../../core/core.module';
import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from './../../components/components.module';
import { SettingsAdditionalInformationComponent } from './additional-information/additional-information.component';
import { SettingsAdditionalInformationPageComponent } from './additional-information-page/additional-information-page.component';
import { SettingsAdditionalInformationWrapperComponent } from './additional-information-wrapper/additional-information-wrapper.component';
import { SettingsAllKeysComponent } from './all-keys/all-keys.component';
import { SettingsAllKeysPageComponent } from './all-keys-page/all-keys-page.component';
import { SettingsAllKeysWrapperComponent } from './all-keys-wrapper/all-keys-wrapper.component';
import { SettingsGeneralInformationComponent } from './general-information/general-information.component';
import { SettingsGeneralInformationPageComponent } from './general-information-page/general-information-page.component';
import { SettingsGeneralInformationWrapperComponent } from './general-information-wrapper/general-information-wrapper.component';
import { SettingsKeyProvidersComponent } from './key-providers/key-providers.component';
import { SettingsKeyProvidersPageComponent } from './key-providers-page/key-providers-page.component';
import { SettingsKeyProvidersWrapperComponent } from './key-providers-wrapper/key-providers-wrapper.component';
import { SettingsKeysComponent } from './keys/keys.component';
import { SettingsKeysPageComponent } from './keys-page/keys-page.component';
import { SettingsKeysWrapperComponent } from './keys-wrapper/keys-wrapper.component';
import { SettingsSmtpComponent } from './smtp/smtp.component';
import { SettingsSmtpWrapperComponent } from './smtp-wrapper/smtp-wrapper.component';
import { SettingsThemeComponent } from './theme/theme.component';
import { SettingsThemePageComponent } from './theme-page/theme-page.component';
import { SettingsThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';
import { SettingsToolbarComponent } from './toolbar/toolbar.component';
import { SetttingsSmtpPageComponent } from './smtp-page/smtp-page.component';
import { SharedModule } from './../../../shared/shared.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksWrapperComponent } from './tasks-wrapper/tasks-wrapper.component';

const routes: Routes = [
    { path: '', redirectTo: 'general-information', pathMatch: 'full' },
    { path: 'general-information', component: SettingsGeneralInformationPageComponent },
    { path: 'additional-information', component: SettingsAdditionalInformationPageComponent },
    { path: 'theme-settings', component: SettingsThemePageComponent },
    { path: 'smtp-settings', component: SetttingsSmtpPageComponent },
    { path: 'keys', component: SettingsKeysPageComponent },
    { path: 'keys/list', component: SettingsAllKeysPageComponent },
    { path: 'keys/providers', component: SettingsKeyProvidersPageComponent },
    { path: 'keys/providers/:provider', component: SettingsAllKeysPageComponent },
    { path: 'keys/providers/:provider/:component', component: SettingsAllKeysPageComponent },
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
        SetttingsSmtpPageComponent,
        SettingsSmtpWrapperComponent,
        SettingsToolbarComponent,
        SettingsSmtpComponent,
        SettingsGeneralInformationPageComponent,
        SettingsGeneralInformationWrapperComponent,
        SettingsGeneralInformationComponent,
        SettingsAdditionalInformationPageComponent,
        SettingsAdditionalInformationWrapperComponent,
        SettingsAdditionalInformationComponent,
        SettingsThemeComponent,
        SettingsThemePageComponent,
        SettingsThemeWrapperComponent,
        TasksComponent,
        TasksPageComponent,
        TasksWrapperComponent,
        SettingsKeysPageComponent,
        SettingsKeysWrapperComponent,
        SettingsKeysComponent,
        SettingsAllKeysPageComponent,
        SettingsAllKeysWrapperComponent,
        SettingsAllKeysComponent,
        SettingsKeyProvidersPageComponent,
        SettingsKeyProvidersWrapperComponent,
        SettingsKeyProvidersComponent,
        ComponentDeleteDialogComponent,
    ],
    entryComponents: [],
    exports: [

    ],
    providers: []
})
export class OrganizationSettingsModule {
}
