import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project.component';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  totallist=[]
  score=0
  evaluation=[]
  constructor(private http:HttpClient,private project:ProjectComponent) { }

  ngOnInit(): void {
    
     this.load()
  }
  load(){
    this.http.get(
      'http://localhost:4000/Quiz'
    )
    .subscribe((qlist)=>{

      for(const key in qlist){
        this.totallist.push({...qlist[key],id:key})
      }
      console.log(this.totallist[1].question)
      console.log("Score...........")
      this.calculatingscores()
     this.defaultsetvalues()



    })

  }
defaultsetvalues(){
  for(const x in this.totallist){
    const y=parseInt(x)+1
    const body={
      selected:0
    }
    this.http.patch(
      'http://localhost:4000/Quiz/'+y,body
    )
    .subscribe()

  }
}


  calculatingscores(){

    console.log("Calculating..")
    console.log(this.totallist)
    for(const x in this.totallist){
      if(this.totallist[x].answer==this.totallist[x].selected){
        this.score++
        this.evaluation.push(1)
        console.log(this.score)
      }
      else{
        this.evaluation.push(0)
      }

      console.log(this.evaluation)
    }
   

  }

}
