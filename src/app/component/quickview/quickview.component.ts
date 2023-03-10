import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/DataService/data.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit{

  constructor(private dataservice: DataService) {}
  Book: any;
  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book = result;
      console.log('data of quickview',this.Book);
    });
  }
}

