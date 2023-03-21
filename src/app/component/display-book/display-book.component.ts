import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss'],
})
export class DisplayBookComponent implements OnInit {
  constructor(private dataservice: DataService, private router: Router) {}
  @Input() childArray: any;
  p: number = 1;
  itemsPerPage: number = 8; 
  totalProduct: any;
  Search: any;
  pagination = true
  ngOnInit() {
    this.dataservice.getbookdetails.subscribe((res: any) => {
      console.log('this is happen', res);
      this.Search = res;
      this.totalProduct = res.length;
    });
  }

  onBookclick(book: any) {
    this.dataservice.SendBookDetails(book);

    this.router.navigateByUrl('/home/quickview');
  }
  paginations(){
    if (empty(this.totalProduct)){
      this.pagination = false
    }
  }
}
