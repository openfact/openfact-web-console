import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { merge } from 'lodash';

@Injectable()
export class RealmScope {

  public realm: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.realm = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.params).map(params => this.getRealm(params)).distinctUntilChanged();
  }

  protected getRealm(params) {
    return this.getRouteParams()['realm'] || this.defaultRealm();
  }

  defaultRealm(): string {
    // TODO use some other mechanism to return the default?
    return 'openfact';
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
