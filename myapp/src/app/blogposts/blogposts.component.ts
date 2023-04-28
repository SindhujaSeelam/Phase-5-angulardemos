import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ map } from 'rxjs/operators'
import { postdata } from './postdata.model';
import { BlogpostsservicesService } from '../Services/blogpostsservices.service';


@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  dbposts:postdata[]=[]
  isFetching=false
  errorMessage=null
  constructor(private blogservice:BlogpostsservicesService) { }

  ngOnInit(): void {
    this.fetchposts()
  }

  oncreatepost(postdata:{title:string,content:string},form: NgForm){

    console.log(postdata)
   
    this.blogservice
    
    .createposts(postdata.title,postdata.content)
    
    .subscribe((responsedata)=>{
      console.log(responsedata)
      this.fetchposts()
      form.reset()
    })
  }
  onfetchposts(){

    this.fetchposts()

  }

  fetchposts(){
    
this.isFetching=true  
  this.blogservice.fetchposts()
  .subscribe((posts)=>{
    this.isFetching=false
    this.dbposts=posts
  },
  (error)=>{
    this.errorMessage=error.error.error;
  })
  }
  ondeleteposts(){

    this.blogservice.deleteposts()
      .subscribe(()=>{
        console.log('posts deleted')
        this.fetchposts()
  })
  }
}
