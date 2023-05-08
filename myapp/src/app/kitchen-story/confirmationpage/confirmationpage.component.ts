import { Component, OnInit,Input } from '@angular/core';
import { itemdata } from '../data.model';
import { userdata } from '../data.model';

@Component({
  selector: 'app-confirmationpage',
  templateUrl: './confirmationpage.component.html',
  styleUrls: ['./confirmationpage.component.css']
})
export class ConfirmationpageComponent implements OnInit {

  @Input()
  purchaseditem:itemdata

  @Input()
  newuserdata:userdata
  constructor() { }

  ngOnInit(): void {
  }

}
