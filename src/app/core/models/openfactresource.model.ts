import { BaseEntity } from './../store/entity/entity.model';

export class OpenfactResource implements BaseEntity {

    id: string;
    name: string;
    description: string;
    labels: Map<string, string>;
    annotations: Map<string, string>;
    resource: any;
    creationTimestamp: any;

    public setResource(resource) {
        this.resource = resource || {};
        this.updateValuesFromResource();
        return this;
    }

    updateResource(resource) {
        if (!this.labels) {
            this.labels = new Map<string, string>();
        }
        if (!this.annotations) {
            this.annotations = new Map<string, string>();
        }
        this.annotations['description'] = this.description;

        let metadata = resource.metadata;
        if (!metadata) {
            metadata = {};
            resource.metadata = metadata;
        }
        if (this.name) {
            metadata.name = this.name;
        }
        metadata.labels = this.labels;
        metadata.annotations = this.annotations;
    }

    updateValuesFromResource() {
        let resource = this.resource || {};
        let metadata = resource.metadata || {};
        this.name = metadata.name || '';
        this.id = this.name;
        this.creationTimestamp = metadata.creationTimestamp;
        this.labels = metadata.labels || new Map<string, string>();
        this.annotations = metadata.annotations || new Map<string, string>();        

        // TODO any other annotations we should look for?
        this.description = this.annotations['description'] || '';
    }

    defaultIconUrl() {
        return '/img/openfact.svg';
    }

    defaultKind() {
        return 'Unknown';
    }

}
