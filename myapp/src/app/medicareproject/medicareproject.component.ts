import { Component, OnInit } from '@angular/core';
import { MedicareService } from '../Services/medicare.service';
import { medicinesdataformat, usersdata } from './data.model';
import { MedicarecartService } from '../Services/medicarecart.service';

@Component({
  selector: 'app-medicareproject',
  templateUrl: './medicareproject.component.html',
  styleUrls: ['./medicareproject.component.css']
})
export class MedicareprojectComponent implements OnInit {

  check=false
  medicinesdata :medicinesdataformat[]=[]
  searcht:any
  image=true
  payment=false
  login=true
  invalid=false
  takedetailsvar=false
  cartvar=false

  userdata :any=[]

  

  constructor(private service:MedicareService,private cart:MedicarecartService) { }

  ngOnInit(): void {
    this.getmedicines()
    this.getusers()
  }



  onchecklogin(logindata:{email:string,password:string})
  {
    
    for(const i in this.userdata){
      if(this.userdata[i].email==logindata.email && this.userdata[i].password==logindata.password)
      {
        this.login=false
        this.service.userinfo=this.userdata[i]
        this.cart.id=this.userdata[i].id
      }
      else{
        this.invalid=true

      }
    }
  
  }
    
  
  onimage(){

    this.check=true
  }

  getmedicines(){

    this.service.getmedicines()

    .subscribe((data)=>{
      this.medicinesdata=data
    })
  }

  getusers(){
    this.service.getusersfromdb()
    .subscribe((data )=>{
      this.userdata=data
    })
  }
  registeruser(registerdata:usersdata){
    console.log(registerdata)
    this.takedetailsvar=false
    this.login=true
    this.service.reguser(registerdata)
    .subscribe(()=>{
      this.getusers()
      this.invalid=false
    })

  }

  onregister(){
    this.takedetailsvar=true
    this.login=false
    
  }
  oncart(){

    this.cartvar=true
  }

   
 
}
