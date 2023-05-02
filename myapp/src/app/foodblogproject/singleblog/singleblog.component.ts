import { Component, OnInit, Input } from '@angular/core';
import { postdata } from '../postdata.model';
import { FoodblogService } from 'src/app/Services/foodblog.service';
import { FoodblogprojectComponent } from '../foodblogproject.component';
@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent implements OnInit {

  update=false
  @Input()
  post:postdata

  constructor(private foodservice:FoodblogService,private foodblogpost:FoodblogprojectComponent) { }

  ngOnInit(): void {
  }
  ondelete(){
    
    this.foodservice.deletesinglepost(this.post.id)
    .subscribe(()=>{
      this.foodblogpost.onfetchposts()
    })
  }
  

  updateopen(){
  
    this.update=true
  }
}
