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
  ngOnInit() {
    this.dataservice.getbookdetails.subscribe((res: any) => {
      console.log('this is happen', res);
    });
  }

  onBookclick(book: any) {
    this.dataservice.SendBookDetails(book);

    this.router.navigateByUrl('/home/quickview');
  }
}
