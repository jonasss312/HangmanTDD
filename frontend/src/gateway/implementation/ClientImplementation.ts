import { Client } from "gateway/api/Client";
import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export class ClientImplementation implements Client {
  private readonly serverUrl: string;

  constructor(serverUrl: string) {
    this.serverUrl = serverUrl;
  }

  post<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>
  ): Observable<T> {
    return ajax
      .post<T>(this.serverUrl + url, body, headers)
      .pipe(map((t) => t.response));
  }

  patch<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>
  ): Observable<T> {
    return ajax
      .patch<T>(this.serverUrl + url, body, headers)
      .pipe(map((t) => t.response));
  }
}
