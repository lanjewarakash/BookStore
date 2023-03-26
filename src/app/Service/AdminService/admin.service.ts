import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IAdminLogin, IAdminSignUp } from '../model/definedata';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService : HttpService) { }
  token:any

  login(data:IAdminLogin){
    let httpOption= {
      headers : new HttpHeaders ({
        'Content-tpe':'application/json',
        'x-access-token':this.token
      })
    }
   return this.httpService.PostService('bookstore_user/admin/login',data, false , httpOption)
  }

  signup(data : IAdminSignUp){
    let httpOption = {
      headers : new HttpHeaders ({
        'Content-type':'application/json',
        'x-access-token' : this.token
      })
    }
   return this.httpService.PostService('bookstore_user/admin/registration', data , false , httpOption)
  }
}
