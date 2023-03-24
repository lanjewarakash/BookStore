import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {

  constructor(private router : Router){

  }


  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/adminlogin')
  
  }
}
