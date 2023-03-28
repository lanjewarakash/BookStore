import { Component , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminbookService } from 'src/app/Service/AdminBookService/adminbook.service';

@Component({
  selector: 'app-adminupdatebook',
  templateUrl: './adminupdatebook.component.html',
  styleUrls: ['./adminupdatebook.component.scss']
})
export class AdminupdatebookComponent {
  bookName: string = '';
  author: string = '';
  description: string = '';
  quantity: string = '';
  price: Number = 0;
  discountPrice: Number = 0;
  

  constructor(public dialogRef:MatDialogRef<AdminupdatebookComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any , private adminService : AdminbookService){
      console.log('data is in Update Book', data);
      this.bookName=data.bookName
      this.author=data.author
      this.discountPrice=data.discountPrice
      this.price=data.price
      this.quantity=data.quantity
    }

  updateBook(){
    let data ={
      bookName:this.bookName,
      author:this.author,
      discountPrice:this.discountPrice,
      price:this.price,
      quantity:this.quantity
    }
    this.adminService.updateAdminBook(data).subscribe((response:any)=>{
      console.log("Update data is " , response);
      
    })
    

  }
}
