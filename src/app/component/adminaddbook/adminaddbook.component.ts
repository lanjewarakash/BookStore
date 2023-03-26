import { Component } from '@angular/core';

import { AdminbookService } from 'src/app/Service/AdminBookService/adminbook.service';

@Component({
  selector: 'app-adminaddbook',
  templateUrl: './adminaddbook.component.html',
  styleUrls: ['./adminaddbook.component.scss'],
})
export class AdminaddbookComponent {
  constructor(private adminBookService: AdminbookService) {}

  bookName: string = '';
  author: string = '';
  description: string = '';
  quantity: string = '';
  price: Number = 0;
  discountPrice: Number = 0;
  Book: any;
  address = false;
  placeOrder = false;

  addAdminBook() {
    let data = {
      bookName: this.bookName,
      author: this.author,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      discountPrice: this.discountPrice,
    };
    this.adminBookService.addAdminBook(data).subscribe((response: any) => {
      console.log('Book Added successfully', response);
    });
  }
}
