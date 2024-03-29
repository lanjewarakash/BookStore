import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClinet: HttpClient) {}

  BaseUrl = 'https://bookstore.incubation.bridgelabz.com/';

  PostService(
    url: string,
    reqData: any,
    token: boolean = false,
    httpOption: any
  ) {
    return this.httpClinet.post(
      this.BaseUrl + url,
      reqData,
      token && httpOption
    );
  }

  GetService(url: string, token: boolean = true, httpOption: any) {
    return this.httpClinet.get(this.BaseUrl + url, token && httpOption);
  }

  DeleteService(url: string, token: boolean = true, httpOption: any) {
    return this.httpClinet.delete(this.BaseUrl + url, token && httpOption);
  }
  PutService(
    url: string,
    reqData: any,
    token: boolean = true,
    httpOption: any
  ) {
    return this.httpClinet.put(
      this.BaseUrl + url,
      reqData,
      token && httpOption
    );
  }
}
