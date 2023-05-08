import { Component, OnInit } from '@angular/core';
import { BlogpostsservicesService } from '../Services/blogpostsservices.service';
import { postdata } from './postdata.model';
import { FoodblogService } from '../Services/foodblog.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foodblogproject',
  templateUrl: './foodblogproject.component.html',
  styleUrls: ['./foodblogproject.component.css']
})
export class FoodblogprojectComponent implements OnInit {

  dbposts:postdata[]=[]
  isFetching=false
  errorMessage=null
  createform=false
  home=true
  checkblog=false
  constructor(private foodservice:FoodblogService) { }

  ngOnInit(): void {
    this.fetchposts()
  }
  createformdisplay(){
    this.createform=true
    this.home=false
  }
  create(postdata:{title:string,content:string,image:string},form:NgForm){
   this.foodservice.createposts(postdata.title,postdata.content,postdata.image)
   .subscribe((response)=>{
    console.log(response)
    form.reset()
    this.checkblog=true
    
   })

  }
  fetchposts(){
    
    this.isFetching=true  
      this.foodservice.fetchposts()
      .subscribe((posts)=>{
        this.isFetching=false
         console.log(posts);
        this.dbposts=posts
        // console.log(this.dbposts);
      },
      (error)=>{
        this.errorMessage=error.error.error;
      })
      }
      ondeleteposts(){
    
        this.foodservice.deleteposts()
          .subscribe(()=>{
            console.log('posts deleted')
            this.fetchposts()
      })
      }
      onfetchposts(){

        this.fetchposts()
        this.home=true
        this.createform=false
    
      }

}