import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicarehome',
  templateUrl: './medicarehome.component.html',
  styleUrls: ['./medicarehome.component.css']
})
export class MedicarehomeComponent implements OnInit {


  home=true
  buypage=false
  adminpage=false
  cart=false
  constructor() { }

  ngOnInit(): void {
  }

  onbuypage(){
    this.buypage=true
    this.home=false
  }

  onadminpage(){
    this.adminpage=true
    this.home=false
  }
  oncart(){
    this.cart=true
  }
}
