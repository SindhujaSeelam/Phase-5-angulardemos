import { Component, OnInit,Input } from '@angular/core';
import { MovieserviceService } from 'src/app/Services/movieservice.service';
import { MovieprojectComponent } from '../movieproject.component';
import { moviedataformat } from '../data.model';

@Component({
  selector: 'app-moviesingleproduct',
  templateUrl: './moviesingleproduct.component.html',
  styleUrls: ['./moviesingleproduct.component.css']
})
export class MoviesingleproductComponent implements OnInit {

  @Input()
  x;

  id
  constructor(private main:MovieprojectComponent,private cart:MovieserviceService) { }

  ngOnInit(): void {
  }
  onpayment(){
    this.main.payment=true
    }
  
    addcart(x:moviedataformat){
  
      this.cart.addtocart(x)
      window.alert("Item added to cart")
  
    }
  

}
