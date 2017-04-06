import { KeycloakResource } from '../models/keycloakresource.model';
import { KeycloakService } from './keycloak.service';
import { Observable } from 'rxjs/Observable';
import { RealmScope } from './realm.scope';
import { Restangular } from 'ng2-restangular';
import { Subscription } from 'rxjs/Subscription';
import { pathJoin } from '../models/utils';

export abstract class RealmResourceService<T extends KeycloakResource, L extends Array<T>> extends KeycloakService<T, L> {
  private realmSubscription: Subscription;
  private _realm: string;
  protected _serviceUrl: string;

  constructor(
    KeycloakRestangular: Restangular,
    private realmScope: RealmScope,
    private urlSuffix: string,
    private urlPrefix: string = '/admin/realms/',
  ) {
    super(KeycloakRestangular);
    this.realm = realmScope.defaultRealm();

    if (this.realmScope) {
      this.realmSubscription = this.realmScope.realm.subscribe(
        realm => {
          this.realm = realm;
        },
      );
    }
  }

  get realm(): string {
    return this._realm;
  }

  set realm(realm: string) {
    if (realm != this._realm) {
      this._realm = realm;
      this._serviceUrl = null;
      this.onRealmChanged();
    }
  }

  get(id: string, realm: string = null): Observable<T> {
    let url = realm ? this.serviceUrlForRealm(realm) : this.serviceUrl;
    return this.restangularService.one(url, id).get();
  }

  list(realm: string = null, queryParams: any = null): Observable<L> {
    let url = realm ? this.serviceUrlForRealm(realm) : this.serviceUrl;
    return this.restangularService.all(url).getList(queryParams);
  }

  create(obj: T, realm: string = null): Observable<T> {
    if (!realm) {
      realm = obj.realm;
    }
    let url = realm ? this.serviceUrlForRealm(realm) : this.serviceUrl;
    obj.updateResource();
    return this.restangularService.all(url).post(obj);
  }

  /**
   * Returns the service URL to use for the current realm scope
   */
  get serviceUrl(): string {
    if (!this._serviceUrl) {
      this._serviceUrl = this.serviceUrlForRealm(this.realm);
    }
    return this._serviceUrl;
  }

  /**
   * Returns the base URL to use for the given realm
   */
  protected serviceUrlForRealm(realm: string) {
    return this.createServiceUrl(this.urlPrefix, realm, this.urlSuffix);
  }

  protected createServiceUrl(urlPrefix: string, realm: string, urlSuffix: string): string {
    if (realm) {
      let url = pathJoin(urlPrefix, realm, urlSuffix);
      return url;
    }
    return '';
  }

  // TODO
  ngOnDestroy() {
    this.realmSubscription.unsubscribe();
  }

  protected onRealmChanged() {

  }

}
