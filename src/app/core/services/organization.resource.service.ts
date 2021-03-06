import { Observable } from 'rxjs/Observable';
import { OpenfactResource } from './../models/openfactresource.model';
import { OpenfactService } from './openfact.service';
import { OrganizationScope } from './organization.scope';
import { Restangular } from 'ngx-restangular';
import { Subscription } from 'rxjs/Subscription';
import { pathJoin } from '../models/utils';

export abstract class OrganizationResourceService<T extends OpenfactResource, L extends Array<T>> extends OpenfactService<T, L> {

  private organizationSubscription: Subscription;
  private _organization: string;
  protected _serviceUrl: string;

  constructor(
    openfactRestangular: Restangular,
    private organizationScope: OrganizationScope,
    private urlSuffix: string,
    private urlPrefix: string = '/admin/organizations/',
  ) {
    super(openfactRestangular);
    this.organization = organizationScope.defaultOrganization();

    if (this.organizationScope) {
      this.organizationSubscription = this.organizationScope.organization.subscribe(
        organization => {
          this.organization = organization;
        },
      );
    }
  }

  get organization(): string {
    return this._organization;
  }

  set organization(organization: string) {
    if (organization !== this._organization) {
      this._organization = organization;
      this._serviceUrl = null;
      this.onOrganizationChanged();
    }
  }

  get(id: string, organization: string = null): Observable<T> {
    const url = organization ? this.serviceUrlForOrganization(organization) : this.serviceUrl;
    if (url) {
      return this.restangularService.one(url, id).get();
    } else {
      return Observable.create((observer) => observer.next(<T>{}));
    }
  }

  list(queryParams: any = null, organization: string = null): Observable<L> {
    const url = organization ? this.serviceUrlForOrganization(organization) : this.serviceUrl;
    if (url) {
      return this.restangularService.all(url).getList(queryParams);
    } else {
      return Observable.create((observer) => observer.next(<L>[]));
    }
  }

  create(obj: T, organization: string = null): Observable<T> {
    const url = organization ? this.serviceUrlForOrganization(organization) : this.serviceUrl;
    return this.restangularService.all(url).post(obj);
  }

  /**
   * Returns the service URL to use for the current organization scope
   */
  get serviceUrl(): string {
    if (!this._serviceUrl) {
      this._serviceUrl = this.serviceUrlForOrganization(this.organization);
    }
    return this._serviceUrl;
  }

  /**
   * Returns the base URL to use for the given organization
   */
  protected serviceUrlForOrganization(organization: string) {
    return this.createServiceUrl(this.urlPrefix, organization, this.urlSuffix);
  }

  protected createServiceUrl(urlPrefix: string, organization: string, urlSuffix: string): string {
    if (organization) {
      const url = pathJoin(urlPrefix, organization, urlSuffix);
      return url;
    }
    return '';
  }

  // TODO
  ngOnDestroy() {
    this.organizationSubscription.unsubscribe();
  }

  protected onOrganizationChanged() {
  }

}
