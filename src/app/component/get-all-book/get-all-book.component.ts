import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/bookService/book.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss'],
})
export class GetAllBookComponent implements OnInit {
  bookArray = [];
  ngOnInit() {
    this.getAllBooks();
  }

  constructor(private bookService: BookService) {}

  getAllBooks() {
    this.bookService.getAllBook().subscribe((responce: any) => {
      console.log('Book Api is calling ', responce);
      this.bookArray = responce.result;
      console.log('data', this.bookArray);
      
    });
  }
  highestPrice() {
   this.bookArray= this.bookArray.sort((a: any, b: any) => b.price - a.price);
    console.log('high to low', this.bookArray);
  }

  lowestPrice() {
    console.log('hello');

    this.bookArray= this.bookArray.sort((a: any, b: any) => a.discountPrice - b.discountPrice);
    console.log('hello', this.bookArray);
  }
  newestArrival() {
    this.bookArray= this.bookArray.reverse();
    console.log('hello', this.bookArray);
  }
}
