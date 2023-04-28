import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('product')
  product:{
    ProductName:String
    ProductDescription:String
    ProductQuantity:number
    ProductCost:number
  }
}
