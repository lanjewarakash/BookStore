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
  ) {
    this.hideBadge = true;
    this.badgeCount = 1;
  }
  Book: any;
  increase: any;
  decrease: any;
  addBag: boolean = false;
  count = true;
  item_qty = 1;
  feedbacks: any;
  comments: string = '';
  value: string = '';
  bookid: any;
  hideBadge: boolean = true;
  showCount: boolean = true;
  badgeCount: number = 1;

  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book = result;
      console.log('data of quickview', this.Book);
      this.getAllFeedback();
    });
    this.addwishlistBook();
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
    this.showCount = false;
    this.hideBadge = true;
  }

  increment() {
    this.badgeCount++;
    this.hideBadge = false;
  }
  decrement() {
    if (this.badgeCount < 0) return;
    if (this.badgeCount == 0) {
      this.hideBadge = true;
    }
  }

  increments(Book: any) {
    this.increment();
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log('increase book quantity ', this.item_qty);
    this.updateCount(Book);

    this.snackbar.open('Book is increased', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }

  decrements(Book: any) {
    this.decrement();
    this.item_qty = Book.quantityToBuy;
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
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log('quantity of new', this.item_qty);
    console.log('Quantity of exstings', Book.quantityToBuy);
    console.log('Update book Api before Called');
    console.log('bookid', Book._id);

    let reqData = {
      quantityToBuy: 1,
    };
    this.cartService.quantity(Book._id, reqData).subscribe((response: any) => {
      console.log('UpdateBook API is called', response);
    });
  }

  getAllFeedback() {
    this.cartService.getFeedback(this.Book._id).subscribe((response: any) => {
      console.log(response);
      (this.feedbacks = response.result),
        console.log('feedbacks', this.feedbacks);
    });
  }
  addFeedback() {
    let data = {
      comment: this.comments,
      rating: '2',
      bookid: this.Book._id,
    };
    this.cartService.addFeedback(data).subscribe((response: any) => {
      console.log('feedBack Added', response);
      this.getAllFeedback();
    });
  }
}
