import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicareadmin',
  templateUrl: './medicareadmin.component.html',
  styleUrls: ['./medicareadmin.component.css']
})
export class MedicareadminComponent implements OnInit {

  checkstatus=0
  errorcheckstatus=0
  constructor() { }

  ngOnInit(): void {
  }

  checkadmin(admindata:{name:string,password:string}){
    if(admindata.name=='Sindhuja'){
      this.checkstatus=1
    }
    else{
      this.errorcheckstatus=-1
    }

  }

}
