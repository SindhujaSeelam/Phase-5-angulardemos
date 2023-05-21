import { Component, OnInit,Input } from '@angular/core';
import { MedicareprojectComponent } from '../medicareproject.component';
import { MedicarecartService } from 'src/app/Services/medicarecart.service';
import { medicinesdataformat } from '../data.model';

@Component({
  selector: 'app-medicaresingleproduct',
  templateUrl: './medicaresingleproduct.component.html',
  styleUrls: ['./medicaresingleproduct.component.css']
})
export class MedicaresingleproductComponent implements OnInit {

  @Input()
  x;

  id

  constructor(private main:MedicareprojectComponent,private cart:MedicarecartService) { }

  ngOnInit(): void {
  }

  onpayment(){
  this.main.payment=true
  }

  addcart(x:medicinesdataformat){

    this.cart.addtocart(x)
    window.alert("Item added to cart");

  }

}
