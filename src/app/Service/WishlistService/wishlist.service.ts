import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  addWishlist(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.PostService(
      'bookstore_user/add_wish_list/' + reqData.bookid,
      reqData,
      true,
      httpOption
    );
  }
  getWishlistBook() {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.GetService(
      'bookstore_user/get_wishlist_items',
      true,
      httpOption
    );
  }

  deleteWishlistBook(reqData: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.DeleteService(
      'bookstore_user/remove_wishlist_item/' + reqData._id,
      true,
      httpOption
    );
  }
}
