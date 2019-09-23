import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { getAppUrl } from '../helpers/get-app-url.helper';

@Injectable()
export class HrisMenuService {
  private rootUrl: string;
  constructor(private httpClient: HttpClient) {
    this.rootUrl = '/api/';
  }

  getApps() {
    return this.httpClient.get(`${this.rootUrl}apps?paging=false`).pipe(
      map((res: any) =>
        (res.apps || []).map((app: any) => {
          return { ...app, url: getAppUrl(app) };
        })
      )
    );
  }

  getCurrentUser() {}
}
