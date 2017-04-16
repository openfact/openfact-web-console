import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Organization } from './../models/organization.model';
import { Router } from '@angular/router';
import { merge } from 'lodash';

@Injectable()
export class OrganizationScope {

  public organization: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.organization = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.params).map(params => this.getOrganization(params)).distinctUntilChanged();
  }

  protected getOrganization(params) {
    return this.getRouteParams()['organization'] || this.defaultOrganization();
  }

  defaultOrganization(): string {    
    return null;
  }

  private getRouteParams(): any {
    if (
      this.router &&
      this.router.routerState &&
      this.router.routerState.snapshot &&
      this.router.routerState.snapshot.root
    ) {
      let firstChild = this.router.routerState.snapshot.root.firstChild;
      let res = {};
      while (firstChild) {
        res = merge(res, firstChild.params);
        firstChild = firstChild.firstChild;
      }
      return res;
    }
    return null;
  }

}
