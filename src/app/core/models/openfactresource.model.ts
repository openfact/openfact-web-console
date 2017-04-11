import { BaseEntity } from './../store/entity/entity.model';
import { Restangular } from 'ng2-restangular';

export class OpenfactResource implements BaseEntity {

  id: string;

  public setResource(resource) {
    this.updateValuesFromResource(resource || {});
    return this;
  }

  updateResource(resource) { }

  updateValuesFromResource(resource) {
    this.id = resource.id;
  }

  defaultKind() {
    return 'Unknown';
  }

}
