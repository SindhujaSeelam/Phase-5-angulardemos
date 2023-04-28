import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicklogs',
  templateUrl: './clicklogs.component.html',
  styleUrls: ['./clicklogs.component.css']
})
export class ClicklogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showsecret:boolean
  logs=[]

  resetlogs(){
    this.logs=[]
  }
  toggleshowsecret(){

    this.showsecret=!this.showsecret
    let dateTime=new Date()
    this.logs.push('Button pushed at '+ dateTime.toLocaleTimeString())
  }
}
