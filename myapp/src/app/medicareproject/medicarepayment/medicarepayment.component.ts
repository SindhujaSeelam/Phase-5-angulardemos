import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicarepayment',
  templateUrl: './medicarepayment.component.html',
  styleUrls: ['./medicarepayment.component.css']
})
export class MedicarepaymentComponent implements OnInit {

  confirm=false
  constructor() { }

  ngOnInit(): void {
  }

  confirmationpage(){

    this.confirm=true
  }
}
