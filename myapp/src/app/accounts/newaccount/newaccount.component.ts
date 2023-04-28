import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { AccountServices } from 'src/app/Services/AccountServices';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  constructor(private accountservice:AccountServices) { }

  ngOnInit(): void {
  }

  
  onaddaccount(accname:string,status:string){

    this.accountservice.addAccount(accname,status)
  }
}
