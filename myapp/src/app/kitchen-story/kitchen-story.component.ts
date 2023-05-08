import { Component, OnInit } from '@angular/core';
import { itemdata } from './data.model';
import { userdata } from './data.model';
import { KitchenStoryService } from '../Services/kitchen-story.service';

@Component({
  selector: 'app-kitchen-story',
  templateUrl: './kitchen-story.component.html',
  styleUrls: ['./kitchen-story.component.css']
})
export class KitchenStoryComponent implements OnInit {

  itemslist:itemdata[]=[]
  selecteditemid
   category=new Set()
   display=false
   selectcat
   searchbar=true
   payment=false
   takedetailsvar=false
   newuserdata:userdata
   purchaseditem:itemdata
   confirmation=false
  constructor(private service:KitchenStoryService) { }

  ngOnInit(): void {
  this.getitems()
  }

  getitems(){
    this.service.getItems()
    .subscribe((data)=>{
      this.itemslist=data
  
      for(const i in data){

        this.category.add(data[i].category)
      }
      
      
      
    })
  }

  displayselecteditems(select:string){

    this.selectcat=select
    this.display=true
  }

  displaypayment(userdata:{firstname:string,lastname:string,phone:number,address:string}){

    this.newuserdata=userdata
    this.payment=true
    this.searchbar=false
    this.display=false
    this.takedetailsvar=false
    this.service.insertuserdata(userdata.firstname,userdata.lastname,userdata.phone,userdata.address,this.selecteditemid)
  }
  takedetails(itemdata){

    this.takedetailsvar=true
    this.searchbar=false
    this.display=false
    this.purchaseditem=itemdata
   
  }

  confirmationpage(){

    this.confirmation=true
    this.searchbar=false
    this.display=false
    this.takedetailsvar=false
    this.payment=false
  }
}
