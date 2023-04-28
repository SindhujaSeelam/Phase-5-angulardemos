import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private project:ProjectComponent) { }

  ngOnInit(): void {
  }

  onstart(){

    this.project.welcome=false
  }
}
