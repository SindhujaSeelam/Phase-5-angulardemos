import { Component, OnInit } from '@angular/core';
import { medicinesdataformat } from '../../data.model';
import { MedicareprojectComponent } from '../../medicareproject.component';
import { MedicareService } from 'src/app/Services/medicare.service';

@Component({
  selector: 'app-medicareadminportal',
  templateUrl: './medicareadminportal.component.html',
  styleUrls: ['./medicareadminportal.component.css']
})
export class MedicareadminportalComponent implements OnInit {

  addform=false
  display=true
  update=false
  x=false
  post:medicinesdataformat
  medicinesdata:medicinesdataformat[]=[]
  constructor(private service:MedicareService) {
   }

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

  edit(existupdatedata:medicinesdataformat){
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

  add(data:medicinesdataformat)
  {
    this.service.addmed(data)
    .subscribe(()=>{
      this.addform=false
      this.load()
    })
  }
}
