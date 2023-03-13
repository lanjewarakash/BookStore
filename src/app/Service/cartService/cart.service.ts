import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  addcart(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    
    return this.httpService.PostService(
      'bookstore_user/add_cart_item/' + reqData.bookid, {}, true,
      httpOption
    );
  }

  getAllBooks(){
    let httpOption = {
      headers :  new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token' : this.token

    }) 
    }
    return this.httpService.GetService('bookstore_user/get_cart_items', true , httpOption)
  }
}
