import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IUserLogin, IUserSignUp } from '../model/definedata';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;

  constructor(private httpService: HttpService) {}

  login(reqData: IUserLogin) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        authorization: this.token,
      }),
    };

    return this.httpService.PostService(
      'bookstore_user/login',
      reqData,
      false,
      httpOption
    );
  }

  signup(reqData: IUserSignUp) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'bookstore_user/registration',
      reqData,
      false,
      httpOption
    );
  }
}
