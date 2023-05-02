import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postdata } from '../foodblogproject/postdata.model';
import{ map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FoodblogService {
  url=' http://localhost:3000/blog'
  list=[]

  constructor(private httpclient:HttpClient) { }
  createposts(title:string,content:string,image:string){

    const mypostdata:postdata={title:title,content:content,image:image}
    return this.httpclient.post(
this.url, mypostdata

    )
  }
  fetchposts(){
    return this.httpclient.get(
this.url
    )
    .pipe(
      map((responsedata)=>{
        const postsarray=[]
        for(const key in responsedata){
          postsarray.push({...responsedata[key]})
        }
        return postsarray
      }
      
      ))
  }


  deleteposts(){
    return this.httpclient
    .delete(
      this.url
      )

  }

  deletesinglepost(postid){
   const id=parseInt(postid)
    return this.httpclient
    .delete(
      this.url+'/'+(id)

    )
  }
  updatepost(id :number,chtitle:string,chcontent:string,chimage:string){
   console.log(chimage)
    const body={
    title:chtitle,
    content:chcontent,
    image:chimage

    }
    this.httpclient.patch(
  this.url+"/"+id,body)
  .subscribe(()=>{
    this.fetchposts()
    console.log("Updated")
  })

    }
}

