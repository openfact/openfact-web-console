import { BaseEntity } from './../store/entity/entity.model';
import { Restangular } from 'ngx-restangular';

export class KeycloakResource implements BaseEntity {

  id: string;
  realm: string;

}
