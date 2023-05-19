import { Injectable } from '@angular/core';
import { medicinesdataformat } from '../medicareproject/data.model';

@Injectable({
  providedIn: 'root'
})
export class MedicarecartService {

  items:medicinesdataformat[]=[]
  id

  constructor() { }

  addtocart(item:medicinesdataformat){

    this.items.push(item)
    console.log(this.items)
    // delete this.items[1]
    
  }
}
