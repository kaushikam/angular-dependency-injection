import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillMockService } from '../../service/mock/bill-mock.service';
import { BILL_SERVICE } from 'src/app/domain/model/bill';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: BILL_SERVICE, useClass: BillMockService }
  ]
})
export class MockModule { }
