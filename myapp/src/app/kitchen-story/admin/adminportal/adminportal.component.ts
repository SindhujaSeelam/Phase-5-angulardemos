import { Component, OnInit } from '@angular/core';
import { KitchenStoryService } from 'src/app/Services/kitchen-story.service';
import { itemdata } from '../../data.model';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  pwd=false
  loginagain=false
  display=false
  addform=false
  itemslist:itemdata[]=[]
  constructor(private service:KitchenStoryService,private admin:AdminComponent) { }

  ngOnInit(): void {
  }
  openpwd(){
this.pwd=true
  }

  changepwd(newpwd:string){

    this.service.changeadminpwd(newpwd)
    this.loginagain=true
  }

  ondisplay(){

    this.display=true
    this.getitems()
  }

  getitems(){
    this.service.getItems()
    .subscribe((data)=>{
      this.itemslist=data      
      
    })
  }
  remove(id:number){
    console.log(id)
    this.service.adminremove(id)
    this.getitems()
  }

  additem(){
    this.addform=true
  }

  additemjson(additemdata:itemdata){
    this.service.adminadditem(additemdata)
this.display=true
this.addform=false
this.getitems()
  }

  onback(){
    this.pwd=false
    this.loginagain=false
    this.display=false
  }

  onadditemback(){
    this.display=true
    this.addform=false
  }

}
