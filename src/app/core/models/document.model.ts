import { OpenfactResource } from './openfactresource.model';

export class Document extends OpenfactResource {

    id: string;

    defaultKind() {
        return 'Document';
    }
}

export class Documents extends Array<Document> { }