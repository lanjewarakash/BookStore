import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin, IUserSignUp,} from '../model/definedata';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpClinet : HttpClient) {}

  BaseUrl= 'https://bookstore.incubation.bridgelabz.com/' ;

  PostService( url: string, reqData : IUserLogin | IUserSignUp, token: boolean=false , httpOption: any){
    return this.httpClinet.post(this.BaseUrl+url , reqData , token && httpOption
    );
  }




}

