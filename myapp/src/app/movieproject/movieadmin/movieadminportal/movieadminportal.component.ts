import { Component, OnInit } from '@angular/core';
import { moviedataformat } from '../../data.model';
import { MovieserviceService } from 'src/app/Services/movieservice.service';

@Component({
  selector: 'app-movieadminportal',
  templateUrl: './movieadminportal.component.html',
  styleUrls: ['./movieadminportal.component.css']
})
export class MovieadminportalComponent implements OnInit {

  genres
  addform=false
  display=true
  update=false
  x=false
  post:moviedataformat
  medicinesdata:moviedataformat[]=[]
  constructor(private service:MovieserviceService) { }

  ngOnInit(): void {
    this.load()

  }
  load(){
    this.service.getmedicines()
   .subscribe((data)=>{
    this.medicinesdata=data
    console.log(this.medicinesdata)
   })

  }
  remove(id:number){

    this.service.deletemedicine(id)
    .subscribe(()=>{

      this.load()
    })
    
  }

  changemedstatus(id :number){

    this.service.changestatus(id)
    .subscribe(()=>{
      this.load()
    })
  }

  edit(existupdatedata:moviedataformat){
    this.update=true
    this.post=existupdatedata

  }

  updatepost(data){
    this.service.editmedicines(data)
    .subscribe(()=>{
      this.update=false
      this.load()
    })

  }

  onaddform()
  {
    this.addform=true
  }

  add(data:moviedataformat)
  {
    this.service.addmed(data)
    .subscribe(()=>{
      this.addform=false
      this.load()
    })
  }

}
