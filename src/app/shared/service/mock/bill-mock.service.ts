import { Injectable } from '@angular/core';
import { IBillService, Bill } from 'src/app/domain/model/bill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillMockService implements IBillService {

  constructor(private http: HttpClient) { }

  getBill(consumerId: string): Observable<Bill> {
    return this.http.get<Bill[]>('api/bills').pipe(
        tap(_ => console.log('Fetched bills successfully')),
        map(bills => bills.find(bill => bill.consumerId === consumerId))
    );
  }
}
