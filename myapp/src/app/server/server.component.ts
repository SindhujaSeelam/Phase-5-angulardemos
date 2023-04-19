import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  serverid:number=1;
  serverstatus:string="online";
  servername:string="Server";
  serverdescription:string=""
  getserverstatus(){
    return this.serverstatus;
  }
onclick(){
  if(this.serverstatus=='online'){
    this.serverstatus='offline'
  }
  else if(this.serverstatus=='offline'){
    this.serverstatus='online'
  }
}
getbutton(){
  if(this.serverstatus=='online'){
return "off"
  }
  else if(this.serverstatus=='offline'){
return "on" 
  }
}
onUpdateServerName(event:any){
this.servername=event.target.value;
}
}
