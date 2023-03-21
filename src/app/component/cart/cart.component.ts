import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Service/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {}
  cartBook: any = [];

  CustomerDetails!: FormGroup;
  addressType: any[] = ['Home', 'work', 'others'];
  count: any;
  customerDetails = false;
  address = true;
  placeOrder = true;
  summary = true;
  continue = true;
  item_qty: any;

  ngOnInit() {
    this.getAllBook();
    this.CustomerDetails = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  getAllBook() {
    this.cartService.getAllBooks().subscribe((response: any) => {
      (this.cartBook = response.result),
        console.log('Get All Book in Cart API is Hit', response);
    });
  }

  deleteSingleBoOk(Book: any) {
    console.log(Book);

    this.cartService.deleteOneBook(Book).subscribe((response: any) => {
      console.log('delete api is hiting', response);
      location.reload();
    });
    this.snackbar.open('Book Removed', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }

  addresssDetails() {
    this.address = false;
    this.placeOrder = false;
  }
  onContinue() {
    this.customerDetails = true;
    console.log(this.customerDetails);
    if (this.CustomerDetails.valid) {
      this.summary = false;
      this.continue = false;
      console.log('customers Details is callled', this.CustomerDetails.value);
      let data = {
        addressType: this.addressType,
        fullAddress: this.CustomerDetails.value.address,
        city: this.CustomerDetails.value.city,
        state: this.CustomerDetails.value.state,
      };
      this.cartService.customersdetails(data).subscribe((response: any) => {
        console.log('customers details', response);
      });
      this.snackbar.open('Customers Details filled Sucessfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
    }
  }

  increasebook(Book: any) {
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log('increased', this.item_qty);
    this.updateCount(Book);
    this.snackbar.open('Book is increased', '', {
      duration: 2000,
      verticalPosition: 'bottom',
    });
  }

  decreasebook(Book: any) {
    this.item_qty = Book.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log('decrease', this.item_qty);
      this.updateCount(Book);
      this.snackbar.open('Book is decreased', '', {
        duration: 2000,
        verticalPosition: 'bottom',
      });
    }
  }
  updateCount(Book: any) {
    let reqData = {
      quantityToBuy: this.item_qty,
    };
    this.cartService.quantity(Book._id, reqData).subscribe((res: any) => {
      console.log(res);
      location.reload();
    });
  }
}
