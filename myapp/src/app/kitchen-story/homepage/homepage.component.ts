import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  home=true
  shoppage=false
  admin=false
  constructor() { }

  ngOnInit(): void {
  }

  onshop(){
    this.home=false
    this.shoppage=true
  }
  onadmin(){
    this.home=false
    this.admin=true    
  }
}
