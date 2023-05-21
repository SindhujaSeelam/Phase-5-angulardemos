import { Component, OnInit } from '@angular/core';
import { moviedataformat } from '../data.model';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

@Component({
  selector: 'app-moviecart',
  templateUrl: './moviecart.component.html',
  styleUrls: ['./moviecart.component.css']
})
export class MoviecartComponent implements OnInit {

  x:moviedataformat[]=[]
  payment=false
  totalamount=0
  constructor(private cartservice:MovieserviceService) { }

  ngOnInit(): void {
    this.loaditems()

  }

  addone(additem:moviedataformat)
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
