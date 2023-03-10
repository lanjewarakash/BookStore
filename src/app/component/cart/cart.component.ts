import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/bookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private bookService: BookService) {}
  ngOnInit() {}
}
