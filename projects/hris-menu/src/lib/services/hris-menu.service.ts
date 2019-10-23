import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { getAppUrl } from '../helpers/get-app-url.helper';
import { abbreviate } from '../helpers/abbreviate.helper';
import { startCase } from 'lodash';
import { BehaviorSubject, Observable, zip } from 'rxjs';

interface MenuState {
  appList?: any[];
  userInfo?: any;
  loading: boolean;
  loaded: boolean;
  error?: any;
}

@Injectable()
export class HrisMenuService {
  private rootUrl: string;
  private menuState$: BehaviorSubject<MenuState>;
  private menuStateObservable$: Observable<MenuState>;
  constructor(private httpClient: HttpClient) {
    this.rootUrl = '/api/';
    this.menuState$ = new BehaviorSubject<MenuState>({
      appList: [],
      userInfo: null,
      loaded: false,
      loading: true,
      error: null
    });

    this.menuStateObservable$ = this.menuState$.asObservable();
  }

  init() {
    zip(this.getApps(), this.getCurrentUser()).subscribe(
      res => {
        this.menuState$.next({
          appList: res[0],
          userInfo: res[1],
          loaded: true,
          loading: false
        });
      },
      error => {
        this.menuState$.next({ loaded: true, loading: false, error });
      }
    );
  }

  getApps() {
    return this.httpClient.get(`${this.rootUrl}apps?paging=false`).pipe(
      map((res: any) =>
        (res.apps || []).map((app: any) => {
          return {
            ...app,
            url: getAppUrl(app),
            abbreviatedName: abbreviate(app.name),
            displayName: startCase(app.name)
          };
        })
      )
    );
  }

  getCurrentUser() {
    return this.httpClient.get(`${this.rootUrl}me`).pipe(
      map((userInfo: any) => {
        const name = `${userInfo.firstname} ${userInfo.surname}`;
        return { ...userInfo, abbreviatedName: abbreviate(name), name };
      })
    );
  }

  appList() {
    return this.menuStateObservable$.pipe(
      map((menuState: MenuState) => menuState.appList)
    );
  }

  userInfo() {
    return this.menuStateObservable$.pipe(
      map((menuState: MenuState) => menuState.userInfo)
    );
  }

  loading() {
    return this.menuStateObservable$.pipe(
      map((menuState: MenuState) => menuState.loading)
    );
  }

  error() {
    return this.menuStateObservable$.pipe(
      map((menuState: MenuState) => menuState.error)
    );
  }
}
