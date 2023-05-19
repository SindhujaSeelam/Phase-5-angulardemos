import { Component, OnInit } from '@angular/core';
import { MedicareprojectComponent } from '../../medicareproject.component';
import { medicinesdataformat } from '../../data.model';

@Component({
  selector: 'app-medicareadminportal',
  templateUrl: './medicareadminportal.component.html',
  styleUrls: ['./medicareadminportal.component.css']
})
export class MedicareadminportalComponent implements OnInit {

  medicinesdata:medicinesdataformat[]=[]
  display=true
  addform=false
  constructor(private medicaremain:MedicareprojectComponent) { }

  ngOnInit(): void {
   this.medicinesdata= this.medicaremain.medicinesdata
  }

}
