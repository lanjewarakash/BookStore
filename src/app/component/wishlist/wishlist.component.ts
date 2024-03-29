import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WishlistService } from 'src/app/Service/WishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(private wishService: WishlistService , private snackbar : MatSnackBar) {}
  wishlist : any = [];
  Book:any;
  ngOnInit() {
    this.getWishlistBooks();
  }

  getWishlistBooks() {
    this.wishService.getWishlistBook().subscribe((response: any) => {
      (this.wishlist = response.result)
      console.log('Get Wishlist Api is called', response);
      console.log(this.wishlist);
      
    });
  }
  deletewishListBooks(reqData:any){
    console.log(reqData);
    this.wishService.deleteWishlistBook(reqData).subscribe((response:any)=>{
      console.log('delete Api is Called', response);
    })
    this.snackbar.open('WishList Book Removed' ,'',{
      duration:2000,
      verticalPosition:'bottom'
    })
    
    this.getWishlistBooks()

  }
  }
