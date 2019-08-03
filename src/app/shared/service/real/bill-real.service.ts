import { Injectable } from '@angular/core';
import { IBillService, Bill } from 'src/app/domain/model/bill';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillRealService implements IBillService {

  private bills = [
    {consumerId: '1234567890', consumerNumber: 'VK1/1660/D'}
  ];

  constructor() { }

  getBill(consumerId: string): Observable<Bill> {
    let bill = this.bills.find(bill => bill.consumerId === consumerId);
    return of<Bill>(bill);
  }
}
