import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router, private dataService : DataService){
    
  }
  token: any

  bookStore(){
    this.router.navigateByUrl('home/displaybook')
  }

  searchBook(event:any){
    this.dataService.SendBookDetails(event.target.value)
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('login')
  }
}
