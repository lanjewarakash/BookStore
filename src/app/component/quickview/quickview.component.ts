import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cartService/cart.service';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit{

  constructor(private dataservice: DataService, private cartService:CartService ) {}
  Book: any;
  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book = result;
      console.log('data of quickview',this.Book);
    });
  }
  addCarts() {
    let reqData = {
      bookid: this.Book._id,
    };
    console.log(reqData);
    console.log('bookId ', this.Book._id);
    this.cartService.addcart(reqData).subscribe((result: any) => {
      console.log('add APi is called ', result);
    });
  }
}

