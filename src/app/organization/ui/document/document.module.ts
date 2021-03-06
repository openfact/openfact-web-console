import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../core/core.module';
import { DocumentDeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DocumentSendToCustomPartyDialogComponent } from './send-to-custom-party-dialog/send-to-custom-party-dialog.component';
import { DocumentUploadPageComponent } from './upload-page/upload-page.component';
import { DocumentViewComponent } from './view/view.component';
import { DocumentViewPageComponent } from './view-page/view-page.component';
import { DocumentViewToolbarComponent } from './view-toolbar/view-toolbar.component';
import { DocumentViewWrapperAttachedDocumentsComponent } from './view-wrapper-attached-documents/view-wrapper-attached-documents.component';
import { DocumentViewWrapperComponent } from './view-wrapper/view-wrapper.component';
import { DocumentViewWrapperSendEventsComponent } from './view-wrapper-send-events/view-wrapper-send-events.component';
import { DocumentsListComponent } from './list/list.component';
import { DocumentsListPageComponent } from './list-page/list-page.component';
import { DocumentsListToolbarComponent } from './list-toolbar/list-toolbar.component';
import { NgModule } from '@angular/core';
import { OrganizationComponentsModule } from './../../components/components.module';
import { SharedModule } from './../../../shared/shared.module';
import { ViewAttachedDocumentsComponent } from './view-attached-documents/view-attached-documents.component';
import { ViewSendEventsComponent } from './view-send-events/view-send-events.component';

const routes: Routes = [
  { path: '', component: DocumentsListPageComponent },
  { path: 'upload', component: DocumentUploadPageComponent },
  {
    path: ':document',
    component: DocumentViewPageComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: DocumentViewWrapperComponent },
      { path: 'view/send-events', component: DocumentViewWrapperSendEventsComponent },
      { path: 'view/attached-documents', component: DocumentViewWrapperAttachedDocumentsComponent }
    ]
  },
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
    DocumentsListPageComponent,
    DocumentsListComponent,
    DocumentsListToolbarComponent,
    DocumentViewPageComponent,
    DocumentViewComponent,
    DocumentViewToolbarComponent,
    DocumentViewWrapperComponent,
    DocumentDeleteDialogComponent,
    DocumentUploadPageComponent,
    DocumentSendToCustomPartyDialogComponent,
    DocumentViewWrapperSendEventsComponent,
    ViewSendEventsComponent,
    ViewAttachedDocumentsComponent,
    DocumentViewWrapperAttachedDocumentsComponent,
  ],
  entryComponents: [],
  exports: [
    DocumentsListPageComponent
  ],
  providers: []
})
export class DocumentModule {
}
