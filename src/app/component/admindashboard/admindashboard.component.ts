import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminbookService } from 'src/app/Service/AdminBookService/adminbook.service';
import { AdminaddbookComponent } from '../adminaddbook/adminaddbook.component';
import { AdminupdatebookComponent } from '../adminupdatebook/adminupdatebook.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent {
  bookAdminArray: any;

  constructor(
    private adminBookService: AdminbookService , public dialog: MatDialog , private router :Router)
     {localStorage.getItem('Admintoken');}

  ngOnInit(): void {
    this.getAllBooks();
  }
  
  getAllBooks() {
    this.adminBookService.getAllBook().subscribe((response: any) => {
      console.log('GetAllBOOk Data In Admin', response);
      this.bookAdminArray = response.result;
    });
  }

  deleteAdminBook(reqData: any) {
    console.log(reqData);
    this.adminBookService
      .deleteAdminBook(reqData)
      .subscribe((response: any) => {
        console.log('Admin Book Deleted Successfully', response);
      });
      this.getAllBooks() 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminaddbookComponent, {
    });
}
  openDialogs(admin:any): void {
    const dialogRef = this.dialog.open(AdminupdatebookComponent, {
      data:admin
    }); 
}
logout(){
  localStorage.removeItem('Admintoken')
  this.router.navigateByUrl('/adminlogin')
}
}
