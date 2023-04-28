import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[];
  onAddproduct(productdata :{
    ProductName:String
    ProductDescription:String
    ProductQuantity:number
    ProductCost:number
  }){
    this.products.push(productdata)

  }
}
