import { Component, OnInit } from '@angular/core';
import { moviedataformat, usersdata } from '../data.model';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

@Component({
  selector: 'app-movieconfirmationpage',
  templateUrl: './movieconfirmationpage.component.html',
  styleUrls: ['./movieconfirmationpage.component.css']
})
export class MovieconfirmationpageComponent implements OnInit {

  list:moviedataformat[]=[]
  newuserdata:usersdata
  constructor(private cartservice:MovieserviceService,private service:MovieserviceService)
   { }


  ngOnInit(): void {
    this.list= this.cartservice.items
    this.newuserdata=this.service.userinfo
  }

}
