import { BaseEntity } from './../store/entity/baseentity.model';

export class OrganizationResourceModel implements BaseEntity {

    id: string;
    organization: string;

    resource: any;

    public setResource(resource) {
        this.resource = resource || {};
        this.updateValuesFromResource();
        return this;
    }

    updateResource() {
    }

    updateValuesFromResource() {
    }

    defaultKind() {
        return 'organization';
    }

}
