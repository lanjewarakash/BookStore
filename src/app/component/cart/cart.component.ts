import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartBook: any = []
  ngOnInit() {
    this.getAllBook()
  }

  getAllBook(){
   this.cartService.getAllBooks().subscribe((response:any )=>{
    this.cartBook = response.result,
    console.log('Get All Book API is Hit', response
    );
    
   })
  }
}
