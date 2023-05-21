import { Component, OnInit } from '@angular/core';
import { genres } from '../data.model';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  x
  post
  display=true
  update=false
  add=false
  constructor(private service :MovieserviceService) { }

  ngOnInit(): void {
    this.getgenresfromdb()
  }

  getgenresfromdb(){

    this.service.getgenres()
    .subscribe((data)=>{
this.x=data
console.log(data)
    })

   
  }
  addoreditgenres(body){
      this.service.addgenres(body)
      .subscribe(()=>{
        this.getgenresfromdb()
        this.update=false
        this.add=false
      })
  }
  deletegenre(id:number){
    this.service.deletegenres(id)
    .subscribe(()=>{
      this.getgenresfromdb()
    })
  }
  onupdate(single:genres){

    this.post=single
    this.update=true
  }
}
