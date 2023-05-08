import { Component, OnInit } from '@angular/core';
import { KitchenStoryService } from 'src/app/Services/kitchen-story.service';
import { admin } from '../data.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:KitchenStoryService) { }

  checkstatus=1
  errorcheckstatus=0
  ngOnInit(): void {
    this.checkstatus=0
  }

  checkadmin(admindata:{name:string,password:string}){
    this.service.checkadmin(admindata.name,admindata.password)
    .subscribe((data:admin)=>{
      if(admindata.name==data.name&& admindata.password==data.password){
        this.checkstatus=1
      }
      else{
        this.errorcheckstatus=-1
      }
    })

  }


 

}
