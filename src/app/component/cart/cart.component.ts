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
  count: any;
  customerDetails = false;
  address = true;
  placeOrder = true;
  summary = true;
  continue = true;

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
        console.log('Get All Book API is Hit', response);
    });
  }

  deleteSingleBoOk(Book: any) {
    console.log(Book);

    this.cartService.deleteOneBook(Book).subscribe((response: any) => {
      console.log('delete api is hiting', response);
      location.reload();
    });
  }
  addresssDetails() {
    this.address = false;
    this.placeOrder = false;
  }
  onContinue() {
    this.customerDetails = true;
    if (this.CustomerDetails.valid) {
      console.log('customers Details is callled', this.CustomerDetails.value);
      let data = {
        addressType: 'Home',
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

  checkout() {
    this.summary = false;
    this.continue = false;
  }
  
}
