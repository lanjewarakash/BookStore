import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminbookService } from 'src/app/Service/AdminBookService/adminbook.service';
import { AdminaddbookComponent } from '../adminaddbook/adminaddbook.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
})
export class AdmindashboardComponent {
  bookAdminArray: any;

  constructor(
    private adminBookService: AdminbookService , public dialog: MatDialog)
     {localStorage.getItem('token');}

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
}
