import { OpenfactResource } from './openfactresource.model';

export class Organization extends OpenfactResource {

    environments: Map<string, Organization>;

    defaultKind() {
        return 'Organization';
    }

    defaultIconUrl(): string {
        return '';
    }

}

export class Organizations extends Array<Organization> {
}