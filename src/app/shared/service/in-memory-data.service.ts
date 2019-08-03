import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const bills = [
      {consumerId: '1234567890', consumerNumber: "KLY/1000/D"}
    ]
    return {bills};
  }
}
