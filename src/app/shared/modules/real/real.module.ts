import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillRealService } from '../../service/real/bill-real.service';
import { BILL_SERVICE } from 'src/app/domain/model/bill';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: BILL_SERVICE, useClass: BillRealService }
  ]
})
export class RealModule { }
