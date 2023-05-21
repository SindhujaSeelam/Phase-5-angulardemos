import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieadmin',
  templateUrl: './movieadmin.component.html',
  styleUrls: ['./movieadmin.component.css']
})
export class MovieadminComponent implements OnInit {

    checkstatus=0
  errorcheckstatus=0
  portal=false
  constructor() { }

  ngOnInit(): void {
  }
  checkadmin(admindata:{name:string,password:string}){
    if(admindata.name=='s' && admindata.password=='1'){
      this.checkstatus=1
      this.portal=true
    }
    else{
      this.errorcheckstatus=-1
    }

  }

}
