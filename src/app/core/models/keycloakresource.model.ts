import { BaseEntity } from './../store/entity/entity.model';
import { Restangular } from 'ng2-restangular';

export class KeycloakResource implements BaseEntity {

  id: string;
  realm: string;

}
