import { Component, OnInit } from '@angular/core';
import { AccountServices } from '../Services/AccountServices';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers :[AccountServices]
})
export class AccountsComponent implements OnInit {

  accounts :{name:string,status:string}[]=[]
  constructor(private accountservices:AccountServices) { 
    this.accounts=this.accountservices.accounts;
  }

  ngOnInit(): void {
  }



}
