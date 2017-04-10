import { OpenfactResource } from './openfactresource.model';

export class Organization extends OpenfactResource {

    organization: string;

    defaultKind() {
        return 'Organization';
    }

}

export class Organizations extends Array<Organization> { }
