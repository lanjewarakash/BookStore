import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Service/cartService/cart.service';
import { DataService } from 'src/app/Service/DataService/data.service';
import { WishlistService } from 'src/app/Service/WishlistService/wishlist.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss'],
})
export class QuickviewComponent implements OnInit {
  constructor(
    private dataservice: DataService,
    private cartService: CartService,
    private wishService: WishlistService,
    private snackbar: MatSnackBar
  ) {}
  Book: any;
  increase: any;
  decrease: any;
  addBag: boolean = false;
  count = true;
  item_qty: any;
  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book= result;
      console.log('data of quickview', this.Book);
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
      this.addBag = true;
      this.count = false;
    });
  }
  addwishlistBook() {
    let reqData = {
      bookid: this.Book._id,
    };
    console.log(reqData);
    console.log('bookId', this.Book._id);
    this.wishService.addWishlist(reqData).subscribe((response: any) => {
      console.log('Addwishlist API is Called ', response);
    });
    this.snackbar.open('Book Added to Wishlist', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }
  hideshow() {
    this.addBag = true;
    this.count = false;
  }

  increment() {
    this.increase++;
  }
  decrement() {
    this.decrease--;
  }

  increments(Book: any) {
    this.item_qty = Book.quantity;
    this.item_qty += 1;
    console.log('increase book quantity ', this.item_qty);
    this.updateCount(Book);
    this.snackbar.open('Book is increased', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }

  decrements(Book: any) {
    this.item_qty = Book.quantity;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
    }
    console.log('decreased book quantity', this.item_qty);
    this.updateCount(Book);
    this.snackbar.open('Book is decreased', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }

  updateCount(Book: any) {
    this.item_qty = Book.quantity;
    this.item_qty += 1;
    console.log('quantity of new', this.item_qty);
    console.log('Quantity of exstings', Book.quantity);
    console.log('Update book Api before Called');
    let reqData = {
      quantity: this.item_qty,
    };
    this.cartService.quantity(Book._id, reqData).subscribe((response: any) => {
      console.log('UpdateBook API is called', response);
    });
  }
}
