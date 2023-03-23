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
  @Input() childArray: any;
  p: number = 1;
  itemsPerPage: number = 8;
  totalProduct: any;
  pagination = true;
  Search: any;
  constructor(private dataservice: DataService, private router: Router) {}
  ngOnInit() {
    this.dataservice.getbookdetails.subscribe((res: any) => {
      console.log('Data After Search', res);
      this.Search = res;
      this.totalProduct = res.length;
    });
  }

  onBookclick(book: any) {
    this.dataservice.SendBookDetails(book);
    this.router.navigateByUrl('/quickview');
  }
  paginations() {
    if (this.totalProduct==0) {
      this.pagination = false;
    }
  }
}
