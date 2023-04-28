import { Component, OnInit, Input } from '@angular/core';
import { AccountServices } from 'src/app/Services/AccountServices';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountservice:AccountServices) { }

  ngOnInit(): void {
  }

  @Input()
  account:{
    name:string,
    status:string
  };

  @Input()
  id:number
  
  changeStatus(newstatus:string){

    this.accountservice.updatestatus(this.id,newstatus)
  }
  ondelete(){
    this.accountservice.ondelete(this.id)
  }
}
