import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any

  constructor(private httpservice: HttpService) { 
    this.token = localStorage.getItem('token');

  }


  getAllBook(){
    let httpOption = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        // 'x-access-token': this.token
      })
    }
    return this.httpservice.GetService('bookstore_user/get/book', false, httpOption)
  

  }
}
