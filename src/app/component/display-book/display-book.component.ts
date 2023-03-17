import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss'],
})
export class DisplayBookComponent implements OnInit {
  constructor(private dataservice: DataService, private router: Router) {}
  @Input() childArray: any;
  p:number =1;
  itemsPerPage:number =8;
  totalProduct:any
  booklist = []
  Search : string ='';
  ngOnInit() {
    this.dataservice.getbookdetails.subscribe((res: any) => {
      console.log('this is happen', res);
      this.Search = res
      this.totalProduct =res.length;
    });
  }

  onBookclick(book: any) {
    this.dataservice.SendBookDetails(book);

    this.router.navigateByUrl('/home/quickview');
    
  }
  lowtohigh() {
    this.booklist = this.booklist.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
  }
  hightolow() {
    this.booklist = this.booklist.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }
  newestarrivals() {
    this.booklist.reverse();
  }



}
