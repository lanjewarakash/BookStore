import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cartService/cart.service';
import { DataService } from 'src/app/Service/DataService/data.service';
import { WishlistService } from 'src/app/Service/WishlistService/wishlist.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit{

  constructor(private dataservice: DataService, private cartService:CartService , private wishService : WishlistService ) {}
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
  addwishlistBook(){
    let reqData = {
      bookid: this.Book._id
    };
    console.log(reqData);
    console.log('bookId' ,this.Book._id)
    this.wishService.addWishlist(reqData).subscribe((response:any)=>{
      console.log('Addwishlist API is Called ' , response);
    })
  }
}

