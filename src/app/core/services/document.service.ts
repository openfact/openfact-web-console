import { Document, Documents } from './../models/document.model';
import { Inject, Injectable } from '@angular/core';
import { Pod, Pods } from '../model/pod.model';

import { KUBERNETES_RESTANGULAR } from './kubernetes.restangular';
import { NamespaceScope } from './namespace.scope';
import { NamespacedResourceService } from './namespaced.resource.service';
import { Restangular } from 'ng2-restangular';
import { WatcherFactory } from './watcher-factory.service';

@Injectable()
export class DocumentService extends OrganizationResourceService<Document, Documents> {

    constructor( 
        @Inject(KUBERNETES_RESTANGULAR) openfactRestangular: Restangular,
        namespaceScope: NamespaceScope,
        watcherFactory: WatcherFactory
    ) {
        super(openfactRestangular, namespaceScope, '/documents');
    }

}
