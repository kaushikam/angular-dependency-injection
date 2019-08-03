import { Observable } from 'rxjs';

export interface Bill {
    consumerId: string;
    consumerNumber: string;
}

export interface IBillService {
    getBill(consumerId: string): Observable<Bill>;
}

export const BILL_SERVICE = 'IBillService';
