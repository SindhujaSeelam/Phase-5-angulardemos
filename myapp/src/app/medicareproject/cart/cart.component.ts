import { Component, OnInit } from '@angular/core';
import { MedicarecartService } from 'src/app/Services/medicarecart.service';
import { medicinesdataformat } from '../data.model';
import { EMPTY, empty, isEmpty } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  x:medicinesdataformat[]=[]
  payment=false
  totalamount=0
  constructor(private cartservice:MedicarecartService) { }

  ngOnInit(): void {
    this.loaditems()
   
  }

  addone(additem:medicinesdataformat)
  {
    this.cartservice.items.push(additem)
    this.totalamount=0
    this.loaditems()

  }
  loaditems(){

    this.x= this.cartservice.items
    for(const i in this.x){
      this.totalamount= this.totalamount+this.x[i].price

    }
    console.log(this.totalamount)
  }

  delete(i)
  {
     delete this.cartservice.items[i]
     this.totalamount=0
     for(const i in this.cartservice.items){

      if(this.cartservice.items[i]){

      }
     }
     console.log(this.cartservice.items)
     this.loaditems()
  }

  onpayment()
  {
    this.payment=true
  }
  
}
