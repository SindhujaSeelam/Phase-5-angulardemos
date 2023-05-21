import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviepayment',
  templateUrl: './moviepayment.component.html',
  styleUrls: ['./moviepayment.component.css']
})
export class MoviepaymentComponent implements OnInit {

  confirm=false
  constructor() { }

  ngOnInit(): void {
  }

  confirmationpage(){

    this.confirm=true
  }
}
