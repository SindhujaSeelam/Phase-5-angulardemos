import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { ProjectComponent } from '../project.component';

@Component({
  selector: 'app-singleq',
  templateUrl: './singleq.component.html',
  styleUrls: ['./singleq.component.css']
})
export class SingleqComponent implements OnInit {

  @Input()
  singleq

  @Input()
  index

  @Input()
  length
  radiovalue: number;

  score=[]

  nextbutton=true
  submitbutton=true;

  constructor(private http:HttpClient,private project:ProjectComponent) { }

  ngOnInit(): void {
    console.log(this.singleq.ishidden)

  }
  onclickradio(radiovalue:number)
  {

    console.log(radiovalue)
    const x:number=parseInt(this.singleq.id)+1

    const body={
      selected:radiovalue
    }
    this.http.patch(
      'http://localhost:4000/Quiz/'+x,body
    )
    .subscribe()
  }
onsubmit(){
    this.changehiddenpresent()

    this.changehiddennext()


}
changehiddenpresent(){
  console.log("from hidden present")
  const x:number=parseInt(this.singleq.id)+1
    const body={
     ishidden:true
    }
    this.http.patch(
      'http://localhost:4000/Quiz/'+x,body
    )
    .subscribe()

}

changehiddennext(){
  console.log("from hidden")
  const x:number=parseInt(this.singleq.id)+2
 const  y:number=1
  if(x<=this.length){
    const body={
      ishidden:false
    }
    this.http.patch(
      'http://localhost:4000/Quiz/'+x,body
    )
    .subscribe(()=>{

      this.project.getquestions()
    })
  }
  else{

    this.nextbutton=false
    this.submitbutton=false
    this.project.getscore=true
    const body={
      ishidden:false
    }
    this.http.patch(
      'http://localhost:4000/Quiz/'+y,body
    )
    .subscribe()
  }

}
ondisscore(){
  console.log("Scoring.....")
}

}
