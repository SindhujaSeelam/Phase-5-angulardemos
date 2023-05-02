import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodblogService } from 'src/app/Services/foodblog.service';
import { FoodblogprojectComponent } from '../../foodblogproject.component';
import { SingleblogComponent } from '../singleblog.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input()
  post
  constructor(private service:FoodblogService,private singleblog:SingleblogComponent,private foodblog:FoodblogprojectComponent) { }

  ngOnInit(): void {
 
    
  }
  updatepost(postdata:{title:string,content:string,image:string},form:NgForm){

    console.log(postdata.image)
    this.service.updatepost(this.post.id,postdata.title,postdata.content,postdata.image)
    this.singleblog.update=false
    this.foodblog.fetchposts()

  }

}
