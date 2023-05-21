import { Component, OnInit } from '@angular/core';
import { medicinesdataformat, usersdata } from '../data.model';
import { MedicarecartService } from 'src/app/Services/medicarecart.service';
import { MedicareService } from 'src/app/Services/medicare.service';

@Component({
  selector: 'app-medicareconfirmationpage',
  templateUrl: './medicareconfirmationpage.component.html',
  styleUrls: ['./medicareconfirmationpage.component.css']
})
export class MedicareconfirmationpageComponent implements OnInit {

  list:medicinesdataformat[]=[]
  newuserdata:usersdata
 
 
  constructor(private cartservice:MedicarecartService,private service:MedicareService) { }


  ngOnInit(): void {
    this.list= this.cartservice.items
    this.newuserdata=this.service.userinfo
    

  }

}
