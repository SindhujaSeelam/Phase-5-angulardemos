import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviehome',
  templateUrl: './moviehome.component.html',
  styleUrls: ['./moviehome.component.css']
})
export class MoviehomeComponent implements OnInit {

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
