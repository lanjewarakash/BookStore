import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getAllBooks() {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.GetService(
      'bookstore_user/get_cart_items',
      true,
      httpOption
    );
  }
  addcart(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };

    return this.httpService.PostService(
      `bookstore_user/add_cart_item/${reqData.bookid}`,
      reqData,
      true,
      httpOption
    );
  }
  deleteOneBook(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.DeleteService(
      'bookstore_user/remove_cart_item/' + reqData._id,
      true,
      httpOption
    );
  }
  customersdetails(reqData:any){
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.PutService('bookstore_user/edit_user' , reqData,
      true,
      httpOption
    );
  }

  quantity(bookid:any,reqData:any){
    let httpOption ={
      headers : new HttpHeaders ({
        'Content-type':'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpService.PutService('bookstore_user/cart_item_quantity/'+bookid,reqData, true ,httpOption)

  }
  getFeedback(bookid:any){
    let httpOption = {
      headers : new HttpHeaders ({
        'Content-type': 'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpService.GetService('bookstore_user/get/feedback/'+bookid, true , httpOption)

  }
  addFeedback(reqData:any){
    let httpOption = {
      headers : new HttpHeaders ({
        'Content-type': 'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpService.PostService(`bookstore_user/add/feedback/${reqData.bookid}`, reqData, true , httpOption)

  }
}
