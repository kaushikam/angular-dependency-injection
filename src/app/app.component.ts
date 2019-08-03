import { Component, Inject, OnInit } from '@angular/core';
import { IBillService, Bill, BILL_SERVICE } from './domain/model/bill';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dependency-injection';

  bill$: Observable<Bill>;

  constructor(@Inject(BILL_SERVICE) private billService: IBillService) {}

  ngOnInit() {
    this.bill$ = this.billService.getBill('1234567890');
  }
}
