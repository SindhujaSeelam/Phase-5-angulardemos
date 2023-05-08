import { Component, OnInit } from '@angular/core';
import { KitchenStoryComponent } from '../kitchen-story.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private main:KitchenStoryComponent) { }

  ngOnInit(): void {
  }
  confirmationpage(){

    this.main.confirmationpage()
  }

}
