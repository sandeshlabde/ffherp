import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { ITicketProduct } from '../ticketProduct';

@Component({
  selector: 'app-ticket-product',
  templateUrl: './ticket-product.component.html',
  styleUrls: ['./ticket-product.component.css'],
})
export class TicketProductComponent implements OnInit {
  companydata: any;
  @Input() ProductData: any;
  @Output() product: EventEmitter<ITicketProduct> = new EventEmitter();
  @Output() selectedProduct: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  selectProduct(product: ITicketProduct) {
    this.product.emit(product);
    this.selectedProduct.emit(false);
  }

  ngOnInit(): void {}
}
