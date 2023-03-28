import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminbookService {
  token:any

  constructor( private httpService : HttpService) { 
    this.token = localStorage.getItem('Admintoken')
  }

  addAdminBook(reqData:any){
    let httpOption = {
      headers : new HttpHeaders ({
        'Content-type': 'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpService.PostService('bookstore_user/admin/add/book', reqData , true , httpOption)
  }

  getAllBook(){
    let httpOption = {
      headers : new HttpHeaders ({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.httpService.GetService('bookstore_user/get/book', false , httpOption)
  }

  deleteAdminBook(reqdata:any){
    let httpOption = {
      headers : new HttpHeaders ({
        'Content-type' : 'application/json',
        'x-access-token': this.token
        
      })
    }
    
    return this.httpService.DeleteService('bookstore_user/admin/delete/book/'+reqdata._id, true , httpOption)
  }
  updateAdminBook(reqData:any){
    let httpOption = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token':this.token
      })
    }
    return this.httpService.PutService('bookstore_user/admin/update/book/641961302dcecc000e1159d2',reqData, true , httpOption)
  }
}
