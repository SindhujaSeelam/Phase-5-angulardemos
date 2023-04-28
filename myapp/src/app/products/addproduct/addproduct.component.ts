import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newProductName:String
  newProductDescription:String
  newProductQuantity:number
  newProductCost:number

  @Output()
  productadded=new EventEmitter<{
    ProductName:String
    ProductDescription:String
    ProductQuantity:number
    ProductCost:number
  }>();
  onaddproduct(){
    this.productadded.emit({

      ProductName:this.newProductName,
    ProductDescription:this.newProductDescription,
    ProductQuantity:this.newProductQuantity,
  ProductCost:this.newProductCost
    });

    this.resetFields()
  }
  resetFields(){
    this.newProductName=''
    this.newProductDescription=''
    this.newProductQuantity=null
    this.newProductCost=null
  }
}
